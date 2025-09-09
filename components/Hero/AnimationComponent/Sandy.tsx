'use client';

import React from 'react';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { addOverflowHidden, removeComponent } from '@/libs/utils';

const HEIGHT_GAP = 145;
const SLIDE_DURATION = 1.8;
const SLIDE_EASE = 'power3.inOut';

const Sandy: React.FC = () => {
  useGSAP(() => {
    timelineSandy();
  }, []);

  const timelineSandy = () => {
    const timelineSandy = gsap.timeline();

    timelineSandy
      .set('#sandy-section', { autoAlpha: 1 })
      .set('.slide-section', {
        opacity: 0,
      })
      .from(
        '.sandy',
        {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1.25,
          ease: 'back.out(2.5)',
          onComplete: () => {
            addOverflowHidden('ASection');
            addOverflowHidden('NSection');
            addOverflowHidden('DSection');
            timelineRoll({
              delay: 0,
              mainItem: 'a-text',
              item1: 'a-triangle',
              item2: 'a-a',
              item3: 'a-circle',
            });
            timelineRoll({
              delay: 0.25,
              mainItem: 'n-text',
              item1: 'n-circle',
              item2: 'n-text',
              item3: 'n-triangle',
            });
            timelineRoll({
              delay: 0.5,
              mainItem: 'd-text',
              item1: 'd-triangle',
              item2: 'd-text',
              item3: 'd-circle',
              hide: true,
            });
          },
        },
        '<'
      );
  };

  const timelineRoll = ({
    delay,
    mainItem,
    item1,
    item2,
    item3,
    hide = false,
  }: {
    delay?: number;
    mainItem: string;
    item1: string;
    item2: string;
    item3: string;
    hide?: boolean;
  }) => {
    const timelineASection = gsap.timeline({
      delay: delay,
    });

    let yValue = 0;
    Array.from({ length: 3 }).forEach((_, i) => {
      if (i !== 0) {
        timelineASection.set(`#${item1}-${i + 1}`, {
          y: yValue,
          opacity: 1,
        });
      }
      timelineASection
        .set(`#${item2}-${i + 1}`, {
          y: yValue + HEIGHT_GAP,
          opacity: 1,
        })
        .set(`#${item3}-${i + 1}`, {
          y: yValue + HEIGHT_GAP + HEIGHT_GAP,
          opacity: 1,
        });

      yValue += HEIGHT_GAP + HEIGHT_GAP + HEIGHT_GAP;
    });

    timelineASection.set(`#${mainItem}`, {
      y: yValue,
      opacity: 1,
    });

    let newYValue = yValue;
    Array.from({ length: 3 }).forEach((_, i) => {
      timelineASection
        .to(
          `#${item1}-${i + 1}`,
          {
            y: -newYValue,
            duration: SLIDE_DURATION,
            ease: SLIDE_EASE,
          },
          '<'
        )
        .to(
          `#${item2}-${i + 1}`,
          {
            y: -newYValue + HEIGHT_GAP,
            duration: SLIDE_DURATION,
            ease: SLIDE_EASE,
          },
          '<'
        )
        .to(
          `#${item3}-${i + 1}`,
          {
            y: -newYValue + HEIGHT_GAP + HEIGHT_GAP,
            duration: SLIDE_DURATION,
            ease: SLIDE_EASE,
          },
          '<'
        );
      newYValue -= HEIGHT_GAP + HEIGHT_GAP + HEIGHT_GAP;
    });

    timelineASection.to(
      `#${mainItem}`,
      {
        y: 0,
        opacity: 1,
        duration: SLIDE_DURATION,
        ease: SLIDE_EASE,
        onComplete: () => {
          if (hide) {
            removeComponent('hide-component-sandy');
          }
        },
      },
      '<'
    );
  };

  const TextComponent = ({
    id,
    className,
    children,
  }: {
    id: string;
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        id={id}
        className={`slide-section hide-component-sandy absolute top-0 left-0 flex w-full items-center justify-center ${className}`}
      >
        {children}
      </div>
    );
  };

  const Triangle = ({
    id,
    class: className,
  }: {
    id?: string;
    class?: string;
  }) => {
    return (
      <div
        id={id}
        className={`${className ?? ''} hide-component-sandy slide-section absolute top-0 left-0 flex h-full items-center justify-center`}
      >
        <Image
          src="/images/shapes/triangle.svg"
          alt="Triangle"
          width={16}
          height={16}
          className={`w-[1em]`}
        />
      </div>
    );
  };

  const Circle = ({ id, className }: { id: string; className?: string }) => {
    return (
      <div
        id={id}
        className={`${className ?? ''} slide-section hide-component-sandy absolute top-0 left-3 flex h-full items-center justify-center`}
      >
        <Image
          src="/images/shapes/circle.svg"
          alt="Circle"
          width={16}
          height={16}
          className={`w-[0.6em]`}
        />
      </div>
    );
  };

  return (
    <div
      id="sandy-section"
      className="text-sandy-mobile md:text-sandy invisible flex"
    >
      <div id="s" className="sandy">
        S
      </div>
      <div id="ASection" className="relative">
        <div
          id="a-text"
          className="slide-section w-full"
          style={{ opacity: 0 }}
        >
          a
        </div>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <React.Fragment key={i}>
              <TextComponent
                id={`a-a-${i + 1}`}
                className={`${i % 2 === 1 ? '' : 'rotate-180'}`}
              >
                a
              </TextComponent>
              <Triangle
                id={`a-triangle-${i + 1}`}
                class={`${i === 0 ? 'sandy' : ''} ${i % 2 === 1 ? 'rotate-180' : ''}`}
              />
              <Circle id={`a-circle-${i + 1}`} />
            </React.Fragment>
          );
        })}
      </div>
      <div id="NSection" className="relative">
        <div id="n-text" className="slide-section w-full">
          n
        </div>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <React.Fragment key={i}>
              {i === 0 && (
                <TextComponent
                  id={`n-text-${i + 1}`}
                  className="origin-center scale-x-60"
                >
                  m
                </TextComponent>
              )}
              {i === 1 && (
                <TextComponent id={`n-text-${i + 1}`}>u</TextComponent>
              )}
              {i === 2 && (
                <TextComponent
                  id={`n-text-${i + 1}`}
                  className="origin-center scale-x-60"
                >
                  w
                </TextComponent>
              )}
              <Triangle
                id={`n-triangle-${i + 1}`}
                class={`${i % 2 === 1 ? '' : 'rotate-180'}`}
              />
              <Circle
                id={`n-circle-${i + 1}`}
                className={`${i === 0 ? 'sandy' : ''}`}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div id="DSection" className="relative">
        <div id="d-text" className="slide-section w-full">
          d
        </div>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <React.Fragment key={i}>
              {i === 0 && (
                <TextComponent id={`d-text-${i + 1}`}>p</TextComponent>
              )}
              {i === 1 && (
                <TextComponent id={`d-text-${i + 1}`}>b</TextComponent>
              )}
              {i === 2 && (
                <TextComponent id={`d-text-${i + 1}`}>q</TextComponent>
              )}
              <Triangle
                id={`d-triangle-${i + 1}`}
                class={`${i % 2 === 1 ? '' : 'rotate-180'} ${i === 0 ? 'sandy' : ''}`}
              />
              <Circle id={`d-circle-${i + 1}`} />
            </React.Fragment>
          );
        })}
      </div>
      <div id="y" className="sandy">
        y
      </div>
    </div>
  );
};

export default Sandy;
