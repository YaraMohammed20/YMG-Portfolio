import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MaskedHeading = ({
  text = "Front-End Developer",
  tag = "h2",
  reveal = "rise",
  duration = 1,
  stagger = 0.08,
  className = "",
  style,
  ...rest
}) => {
  const rootRef = useRef(null);

  const Tag = tag;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const letters = root.querySelectorAll(".letter");

    gsap.set(letters, {
      opacity: 0,
      y: 40,
    });

    const animation = gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "back.out(1.7)",
    });

    return () => {
      animation.kill();
    };
  }, [text, duration, stagger]);

  return (
    <Tag
      ref={rootRef}
      className={`m-0 p-0 ${className}`}
      style={style}
      {...rest}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
};

export default MaskedHeading;