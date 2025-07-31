import React, { useEffect, useRef, useState } from 'react';
import Profile from '../../assets/profile.png';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

//svg
import gShape1 from '../../assets/g-shape/g-shape-1.svg';
import rhcp4 from '../../assets/rhcp/rhcp-4.svg';
import Thunder from '../../assets/thunder/thunder.jsx';
import donut2 from '../../assets/donut/donut-1.svg';
import star3 from '../../assets/star/star-3.svg';

const Hero = () => {
  const timelineSoft = gsap.timeline();
  const timelineEng = gsap.timeline();
  const timelineProfile = gsap.timeline({ delay: 2 });

  const [idleMode, setIdleMode] = useState(false);
  let donutMove = false;

  const [colorIndex, setColorIndex] = useState(0);
  const colorList = [
    '#FFFCE1',
    '#FE8609',
    '#937DDB',
    '#0AE448',
    '#0AB0C2',
    '#FFFCE1',
  ];

  const containerRef = useRef(null);
  const followerDonutRef = useRef(null);
  const starRef = useRef(null);

  const rouletteAnimation = (id, delay = 0) => {
    const id1 = `#${id}-1`;
    const id2 = `#${id}-2`;
    const sTimeline = gsap.timeline({ delay: 1.5 + delay });
    sTimeline
      .to(id1, {
        y: -100,
        duration: 1.3,
        ease: 'back.out(2)',
      })
      .to(id1, { y: 0, duration: 1.3, ease: 'back.out(1.8)' }, '-=0.7')
      .fromTo(
        id2,
        { y: -100 },
        { y: 0, duration: 1.3, ease: 'back.out(1.5)' },
        '<'
      )
      .to(id1, { y: -97, duration: 1, ease: 'back.out(1.5)' }, '-=0.4')
      .to(id2, { y: -100, duration: 1, ease: 'back.out(1.8)' }, '<');
  };

  useGSAP(() => {
    setColorIndex(0);
    setIdleMode(false);
  });

  useGSAP(() => {
    const elements = containerRef.current.querySelectorAll('.name-container');
    elements.forEach((el) => el.classList.add('overflow-hidden'));

    softAnimation();
    engAnimation();
    profileAnimation();

    gsap.fromTo(
      '#donut-bg',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power1.in', delay: 3 }
    );

    gsap.fromTo(
      '#donut-bg',
      { x: 300, y: -40, rotate: 135, transformOrigin: '-10% -10%' },
      {
        rotate: 0,
        y: -170,
        duration: 3,
        ease: 'back.out(2)',
        delay: 3,
        onComplete: () => (donutMove = true),
      }
    );

    gsap.fromTo(
      '#star-bg',
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power1.in', delay: 4 }
    );

    gsap.fromTo(
      '#star-bg',
      { x: -420, y: 40, rotate: 270 },
      {
        rotate: 0,
        y: 0,
        x: -370,
        duration: 3,
        ease: 'back.out(2)',
        delay: 4,
      }
    );

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#star-bg', {
      rotation: 360,
      scrollTrigger: {
        trigger: starRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
  }, []);

  useGSAP(() => {
    // sandy loop
    if (idleMode) {
      const sandyTimeline = gsap.timeline();

      const duration = 1;

      sandyTimeline
        .fromTo(
          '.sandy',
          {
            y: 0,
            color: colorList[colorIndex],
          },
          {
            y: -28,
            duration: duration / 4,
            ease: 'power2.out',
            color: colorList[colorIndex + 1],
            stagger: {
              each: 0.1,
            },
          }
        )
        .to(
          '.sandy',
          {
            y: 0,
            duration: duration / 2,
            ease: 'bounce.out',
            stagger: 0.1,
          },
          `<${duration / 4}`
        );

      return () => {
        sandyTimeline.kill();
      };
    }
  }, [idleMode, colorIndex]);

  const softAnimation = () => {
    timelineSoft
      .set('.anime-2', { y: 100 }, '<')
      .from('#s-soft', {
        y: -100,
        opacity: 0,
        duration: 0.5,
      })
      .fromTo(
        '#s-soft',
        {
          rotateX: 180,
        },
        {
          rotateX: 0,
          duration: 2,
          ease: 'bounce.out',
          transformOrigin: '50% 100%',
        },
        '<'
      )
      .fromTo(
        '#gshape-soft',
        {
          scale: 0,
        },
        {
          scale: 1,
          rotate: 360,
          duration: 1,
          ease: 'back.out(1)',
        },
        '-=1.228'
      )
      .fromTo(
        '#rhcp-soft',
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '>-0.5'
      )
      .fromTo(
        '#gshape-soft',
        {
          y: 33,
          x: 50,
        },
        {
          y: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        },
        '>-0.5'
      )
      .from(
        '#o-soft-1',
        {
          y: 100,
          duration: 1,
          ease: 'power2.out',
        },
        '<-0.1'
      )
      .from(
        '#f-soft',
        {
          y: -100,
          duration: 1,
          ease: 'back.out(2)',
        },
        '<'
      )
      .fromTo(
        '#one-soft',
        { y: 100 },
        { y: 0, duration: 1, ease: 'power4.out' },
        '<'
      )
      .fromTo(
        '.part-3',
        { x: -45 },
        { x: 0, ease: 'power4.out', duration: 0.5, stagger: 0 },
        '>'
      )
      .fromTo(
        '.anime-2',
        { y: 100 },
        { y: -96, duration: 2, ease: 'power4.out', stagger: 0.15 }
      )
      .to(
        '.anime-1',
        {
          y: -96,
          duration: 1,
          ease: 'power4.out',
        },
        '-=2)'
      )
      .to(
        '#o-soft-1',
        {
          rotateY: 90,
          duration: 0.25,
          ease: 'none',
        },
        '>-0.5'
      )
      .fromTo(
        '#o-soft-2',
        { rotateY: 90 },
        { rotateY: 0, duration: 0.15, ease: 'none' },
        '>'
      )
      .fromTo(
        '#w-soft',
        { y: 100 },
        { y: 0, duration: 1, ease: 'power4.out', stagger: 0.15 },
        '>1'
      )
      .to(
        '#rhcp-soft',
        {
          y: 100,
          duration: 0.5,
          ease: 'power4.out',
        },
        '<'
      );

    gsap.from('#rhcp-soft', {
      rotate: -360,
      duration: 1.8,
      repeat: -1,
      ease: 'none',
    });
  };

  const engAnimation = () => {
    timelineEng
      .call(rouletteAnimation, ['e-eng'], '<')
      .call(rouletteAnimation, ['n-eng', 0.2], '<')
      .fromTo(
        '#g-eng',
        {
          scale: 0,
          y: -30,
        },
        {
          y: 0,
          scale: 1,
          duration: 3.5,
          ease: 'power4.out',
        },
        '<2'
      )
      .from(
        '#g-eng',
        { rotateY: 180, duration: 1.5, delay: 0.5, ease: 'power3.out' },
        '<'
      )
      .fromTo(
        '#i-eng',
        {
          rotateX: 90,
        },
        {
          transformOrigin: '50% 66%',
          rotateX: -720,
          duration: 3,
          ease: 'expoScale(10,2.5,power2.out)',
        },
        '>-1.5'
      )
      .call(callThunder, [], '<0.5')
      .from(
        '#e-eng-mini-1',
        {
          y: -100,
          duration: 1.5,
          ease: 'power4.out',
        },
        '<-0.5'
      )
      .from(
        '#r-eng',
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power4.out',
        },
        '<'
      )
      .fromTo(
        '#r-eng',
        {
          rotate: -90,
          x: -50,
        },
        {
          ease: 'bounce.out',
          duration: 1.5,
          rotate: 0,
        },
        '<'
      )

      .from('#e-eng-mini-2', { opacity: 0, duration: 0.001 }, '>')
      .from('#e-eng-mini-2', { x: -50, duration: 1, ease: 'power4.out' }, '<')
      .fromTo(
        '#r-eng',
        { x: -50 },
        { x: 0, duration: 1, ease: 'power4.out' },
        '<'
      )
      .to('#thunder', { scale: 0.6, duration: 0.3, ease: 'elastic.out(1,0.5)' })
      .to('#thunder', { scale: 0.3, duration: 0.3, ease: 'elastic.out(1,0.5)' })
      .to('#thunder', { scale: 0, duration: 0.3 })
      .fromTo(
        '#n-eng-3',
        { scale: 0, y: -96 },
        {
          scale: 1,
          duration: 1,
          transformOrigin: '50% 66%',
          ease: 'back.out(1.5)',
        }
      )
      .from(
        '#curly-bracket-1',
        { opacity: 0, x: 10, scale: 0.6, duration: 0.5, ease: 'power5' },
        '<-2'
      )
      .from(
        '#curly-bracket-text',
        { opacity: 0, duration: 0.5, ease: 'power5' },
        '<'
      )
      .from(
        '#curly-bracket-2',
        { opacity: 0, x: -10, scale: 0.6, duration: 0.5, ease: 'power5' },
        '<'
      )
      .call(idle, [], '>+5');
  };

  const profileAnimation = () => {
    timelineProfile
      .from('#profile', {
        x: -370,
        duration: 1.5,
        rotate: -360,
        ease: 'back.out(1.2)',
      })
      .from('.name', {
        y: 100,
        duration: 1,
        ease: 'back.out(1.5)',
        stagger: 0.3,
      });
  };

  const callThunder = () => {
    // remove hidden class from thunder sec
    const thunderSec = document.getElementById('thunder-sec');
    thunderSec.classList.remove('hidden');
  };

  const changeColor = () => {
    setColorIndex((prevIndex) => {
      const newIndex = prevIndex >= colorList.length - 2 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  function idle() {
    const elements = containerRef.current.querySelectorAll('.name-container');
    elements.forEach((el) => el.classList.remove('overflow-hidden'));

    gsap.to('#i-eng', {
      delay: 5,
      transformOrigin: '50% 66%',
      rotateX: 0,
      duration: 3,
      ease: 'expoScale(10,2.5,power2.out)',
      repeat: -1,
      repeatDelay: 6,
    });

    setIdleMode(true);
    // create a loop to run changeColor every 10 seconds and star with 10 delay
    setInterval(() => {
      changeColor();
    }, 6000);
  }

  useGSAP(() => {
    const handleMouseMove = (event) => {
      if (!donutMove) return;

      // Define limits for x and y
      const minX = 285;
      const maxX = 310;
      const minY = -160;
      const maxY = -120;

      // Calculate the new position with limits
      const x = Math.min(Math.max(event.clientX - 855, minX), maxX);
      const y = Math.min(Math.max(event.clientY - 225, minY), maxY);
      console.log(event.clientX, event.clientY);
      // Animate the follower to the new position
      gsap.to(followerDonutRef.current, {
        x: x,
        y: y,
        duration: 8,
        ease: 'power1.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="container mx-auto cursor-default pt-32">
        <div className="relative z-10 flex items-center justify-center gap-4">
          <img
            className="border-radius shadow-primary size-64 rounded-full shadow-sm"
            src={Profile}
            alt="My Profile"
            id="profile"
          />
          <div className="flex flex-col gap-4 font-semibold" ref={containerRef}>
            <h1 className="name-container relative flex h-14 w-fit overflow-hidden text-5xl">
              <div className="name">H</div>
              <div className="name">i</div>
              <div className="name">,</div>
              <div>&nbsp;</div>
              <div className="name">I</div>
              <div className="name">'</div>
              <div className="name">m</div>
              <div>&nbsp;</div>
              <div className="flex">
                <div id="name-s" className="name sandy">
                  S
                </div>
                <div id="name-a" className="name sandy">
                  a
                </div>
                <div id="name-n" className="name sandy">
                  n
                </div>
                <div id="name-d" className="name sandy">
                  d
                </div>
                <div id="name-y" className="name sandy">
                  y
                </div>
              </div>
            </h1>
            <div className="flex text-8xl">
              <div id="s-soft">S</div>
              <img
                id="gshape-soft"
                src={gShape1}
                alt="gshape1"
                className="absolute size-14"
              />
              <div className="relative flex h-24 w-fit overflow-hidden">
                <div id="o-soft-1" className="absolute ms-2">
                  s
                </div>
                <div id="o-soft-2">o</div>
              </div>
              <div
                className="absolute flex h-28 w-fit overflow-hidden"
                style={{ marginLeft: '110px' }}
              >
                <div id="f-soft">f</div>
              </div>
              <div className="relative ml-9 flex h-fit w-fit overflow-hidden">
                <div id="t-soft" className="part-3">
                  t
                </div>
                <div id="w-soft">w</div>
              </div>
              <div className="part-3 absolute ms-48 h-28 w-32 overflow-hidden">
                <img
                  src={rhcp4}
                  alt="rchp-soft"
                  id="rhcp-soft"
                  className="mt-8 size-14"
                />
              </div>
              <div className="relative h-24 w-fit overflow-hidden">
                <div className="anime-1 flex flex-col items-center">
                  <div id="one-soft">1</div>
                  <div id="a-soft">a</div>
                </div>
              </div>
              <div className="relative h-24 overflow-hidden">
                <div className="anime-2">
                  <div>0</div>
                  <div id="r-soft">r</div>
                </div>
              </div>
              <div
                className="absolute h-24 overflow-hidden"
                style={{ marginLeft: '340px' }}
              >
                <div className="anime-2">
                  <div className="anime-3 ms-5">0</div>
                  <div className="anime-3">e</div>
                </div>
              </div>
              &nbsp;
              <div className="relative h-24 w-fit overflow-hidden ps-8">
                <div className="font-normal" id="e-eng-2">
                  E
                </div>
                <div id="e-eng-1" className="flex">
                  E
                </div>
              </div>
              <div className="relative h-24 w-fit overflow-hidden">
                <div className="font-normal" id="n-eng-2">
                  n
                </div>
                <div id="n-eng-1" className="flex">
                  n
                </div>
              </div>
              <div id="g-eng">g</div>
              <div id="i-eng">i</div>
              <div
                id="thunder-sec"
                className="absolute hidden"
                style={{ marginLeft: '585px' }}
              >
                <div className="size-24 pt-3" id="thunder">
                  <Thunder className={'thunder-path'} />
                </div>
                <div
                  className="absolute"
                  style={{ marginLeft: '18px' }}
                  id="n-eng-3"
                >
                  n
                </div>
              </div>
              <div className="relative h-24 w-fit overflow-hidden ps-14">
                <div id="e-eng-mini-1" className="flex">
                  e
                </div>
              </div>
              <div id="e-eng-mini-2">e</div>
              <div id="r-eng">r</div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <div>
                <div className="relative -z-10">
                  <img
                    ref={followerDonutRef}
                    id="donut-bg"
                    className="size-20"
                    src={donut2}
                    alt="donut"
                  />
                </div>
              </div>
              <div className="relative z-0">
                <img
                  id="star-bg"
                  className="size-16"
                  src={star3}
                  alt="star 3"
                />
              </div>

              <div>
                <span id="curly-bracket-1" className="text-4xl">
                  {'{ '}
                </span>
                <span id="curly-bracket-text" className="pt-1 text-2xl">
                  Currently fixing bug{' '}
                </span>
                <span id="curly-bracket-2" className="text-4xl">
                  {' }'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
