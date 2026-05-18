import Image from "next/image";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryProps = {
  items: readonly GalleryItem[];
  columns?: 2 | 3 | 4;
  aspect?: "square" | "portrait" | "landscape";
  className?: string;
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const colsClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export function Gallery({
  items,
  columns = 3,
  aspect = "portrait",
  className,
}: GalleryProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-6",
        colsClass[columns],
        className,
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="group">
          <figure>
            <div
              className={cn(
                "relative overflow-hidden rounded-lg bg-shell",
                aspectClass[aspect],
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {item.caption && (
              <figcaption className="mt-3 text-sm text-muted">
                {item.caption}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
