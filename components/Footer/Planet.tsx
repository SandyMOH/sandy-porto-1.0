'use client';

import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

const Planet: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 2.35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x0e100f);
    if (mountRef.current) {
      const { clientWidth, clientHeight } = mountRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(1);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0xff6ec7) },
        color2: { value: new THREE.Color(0xd1007f) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv; 
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 color1;
        uniform vec3 color2;
  
        float rand(vec2 co){
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
        }
  
        void main() {
          vec3 gradient = mix(color1, color2, vUv.y);
          float noise = rand(vUv * 100.0) * 0.05;
          gl_FragColor = vec4(gradient + noise, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });

    const ball = new THREE.Mesh(geometry, material);
    scene.add(ball);

    // Add wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xe66fba });
    lineMaterial.opacity = 0.2;
    lineMaterial.transparent = true;
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    ball.add(wireframe);

    // Torus ring
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.13, 2, 48);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xebebeb,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(torusGeometry, ringMaterial);
    ring.position.y = 0.35;
    ring.rotation.x = Math.PI / 2;
    ball.add(ring);

    // Wireframe ring
    // const edgesRing = new THREE.EdgesGeometry(torusGeometry);
    // const lineMaterialRing = new THREE.LineBasicMaterial({ color: 0xf5f5f5 });
    // const wireframeRing = new THREE.LineSegments(edgesRing, lineMaterialRing);
    // wireframeRing.position.y = 0.5;
    // wireframeRing.rotation.x = Math.PI / 2;
    // ball.add(wireframeRing);

    // Create a parent
    const ballPivot = new THREE.Object3D();
    scene.add(ballPivot);

    // Add ball to pivot
    ballPivot.add(ball);

    // Tilt the parent
    ballPivot.rotation.z = Math.PI / 8;

    // Orbit angles
    let spherical = new THREE.Spherical();
    spherical.setFromVector3(camera.position.clone());

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    // Mouse handlers
    // const onMouseDown = (event: MouseEvent) => {
    //   isDragging = true;
    //   previousMousePosition = { x: event.clientX, y: event.clientY };
    // };

    // const onMouseMove = (event: MouseEvent) => {
    //   if (!isDragging) return;

    //   const deltaX = event.clientX - previousMousePosition.x;
    //   const deltaY = event.clientY - previousMousePosition.y;

    //   // Sensitivity
    //   const rotationSpeed = 0.005;

    //   // Update spherical angles
    //   spherical.theta -= deltaX * rotationSpeed; // left-right
    //   spherical.phi -= deltaY * rotationSpeed; // up-down

    //   // Clamp phi to avoid flipping upside down
    //   spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));

    //   // Convert spherical back to position
    //   const newPos = new THREE.Vector3().setFromSpherical(spherical);
    //   camera.position.copy(newPos);
    //   camera.lookAt(0, 0, 0);

    //   previousMousePosition = { x: event.clientX, y: event.clientY };
    // };

    // const onMouseUp = () => {
    //   isDragging = false;
    // };

    // Attach listeners
    // renderer.domElement.addEventListener('mousedown', onMouseDown);
    // renderer.domElement.addEventListener('mousemove', onMouseMove);
    // renderer.domElement.addEventListener('mouseup', onMouseUp);

    let frameId: number;
    let zRotationValue = 0.00025;
    const zLimit = 0.05;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      ball.rotation.y += 0.0025;

      ball.rotation.z += zRotationValue;

      if (ball.rotation.z > zLimit || ball.rotation.z < -zLimit) {
        zRotationValue *= -1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.clear();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full"></div>;
};

export default Planet;
