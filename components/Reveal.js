"use client";

// Fades and slides its content in when it scrolls into view.
//   <Reveal>…</Reveal>                       fade up
//   <Reveal variant="left" delay={120}>…     slide in from the left, 120 ms later
// Variants: "up" (default), "left", "right", "scale". `as` changes the HTML tag.
// Without JavaScript the content is simply shown (see the <noscript> rule in app/layout.js).

import { useEffect, useRef, useState } from "react";

const VARIANTS = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${VARIANTS[variant] ?? ""} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
