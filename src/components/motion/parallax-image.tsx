"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  /** Amplitude en pixels (positif = remonte au scroll) */
  amount?: number;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
  /** Style facultatif additionnel sur le container */
  style?: CSSProperties;
};

/**
 * Image avec parallaxe verticale au scroll.
 * Le container utilise un `overflow-hidden` et l'image dépasse en hauteur
 * pour révéler la zone manquante au fil du déplacement.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  amount = 80,
  sizes = "100vw",
  priority = false,
  aspectRatio = "3/4",
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio, ...style }}
    >
      <motion.div
        className="absolute inset-x-0 -top-[10%] -bottom-[10%]"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </div>
  );
}
