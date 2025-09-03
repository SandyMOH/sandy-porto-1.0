'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

const Triangle = () => {
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
    camera.lookAt(0, -0.25, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x0e100f);
    if (mountRef.current) {
      const { clientWidth, clientHeight } = mountRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.ConeGeometry(1, 1.5, 4);

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

    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

    // Add wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xe66fba });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    triangle.add(wireframe);

    // Torus ring
    const torusGeometry = new THREE.TorusGeometry(0.5, 0.08, 6, 14);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xebebeb,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(torusGeometry, ringMaterial);
    ring.position.y = 0.5;
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Wireframe ring
    const edgesRing = new THREE.EdgesGeometry(torusGeometry);
    const lineMaterialRing = new THREE.LineBasicMaterial({ color: 0xf5f5f5 });
    const wireframeRing = new THREE.LineSegments(edgesRing, lineMaterialRing);
    wireframeRing.position.y = 0.5;
    wireframeRing.rotation.x = Math.PI / 2;
    triangle.add(wireframeRing);

    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
      // Map scroll to rotation
      triangle.rotation.y = scrollY * 0.005; // adjust speed factor
    };

    window.addEventListener('scroll', handleScroll);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
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
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.clear();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative flex h-full w-full flex-col-reverse">
      <div className="xl2:absolute xl2:pt-[500px] z-10 flex h-full w-full items-center justify-center">
        <div className="text-center text-3xl lg:text-4xl">
          <h3>I see differently</h3>
          <h3>people don't see what i see</h3>
        </div>
      </div>
      <div ref={mountRef} className="xl2:h-full h-64 md:h-[400px]"></div>
    </div>
  );
};

export default Triangle;
