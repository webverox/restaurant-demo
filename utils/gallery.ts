interface GalleryItem {
  src: string;
  alt: string;
  className?: string;
}

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/1.avif",
    alt: "Chef plating a dish in a warm restaurant kitchen",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/2.avif",
    alt: "Fresh vegetables arranged on a table",
    className: "md:col-span-1",
  },
  {
    src: "/gallery/3.avif",
    alt: "Warmly lit dining room with wooden tables",
    className: "md:col-span-1",
  },
  {
    src: "/gallery/4.avif",
    alt: "Cocktail beside a candlelit table",
    className: "md:col-span-2",
  },
];
