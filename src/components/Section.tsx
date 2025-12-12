import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="snap-section"
    >
      {children}
    </motion.section>
  );
}
