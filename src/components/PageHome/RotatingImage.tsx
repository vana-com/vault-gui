import NextImage from "next/future/image";
import { useCallback, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

function calc(
  x: number,
  y: number,
  rect: { top: number; left: number; width: number; height: number },
): number[] {
  const rotationCeiling = 5; // Maximum degrees to rotate on both axes

  // Do not let xRotation or yRotation go over the ceiling
  const ceiling = (num: number) =>
    Math.min(Math.max(num, rotationCeiling * -1), rotationCeiling);

  return [
    ceiling((y - rect.top - rect.height / 2) / 10) * -1,
    ceiling((x - rect.left - rect.width / 2) / 10),
    1.05,
  ];
}

const trans = (x: number, y: number, s: number): string =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const config = {
  mass: 1,
  tension: 170,
  friction: 75,
  clamp: false,
  precision: 0.01,
  velocity: 0,
};

function Image({ src }: { src: string }) {
  const [xys, setXys] = useState([0, 0, 1]);

  const handleMouseLeave = useCallback(() => {
    setXys([0, 0, 1]);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setXys(calc(e.clientX, e.clientY, rect));
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const props = useSpring({ xys, config });

  return (
    <div
      className="hover-listener h-full"
      ref={ref}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <animated.div
        className="rotatable h-full"
        style={{ transform: props.xys.to(trans) }}
      >
        <div className="styled-image-container aspect-square">
          <NextImage
            priority
            className="absolute inset-0 object-cover w-full h-auto rounded-sm aspect-square overflow-hidden"
            src={src}
            height={1000}
            width={1000}
          />
        </div>
      </animated.div>
    </div>
  );
}

export default Image;
