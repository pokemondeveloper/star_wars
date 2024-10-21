import { LazyLoadImage } from "react-lazy-load-image-component";
import { Props } from "./types";
import { cn } from "@nextui-org/react";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * A lazy-loaded image component that displays a blurred version of the image
 * until it is fully loaded.
 *
 * @prop {string} alt - The alt text for the image.
 * @prop {string} className - The CSS class name for the image element.
 * @prop {string} src - The URL of the image.
 *
 * @example
 * <Image src="https://example.com/image.jpg" alt="An example image" />
 */
export const Image = ({ alt, className, src }: Props) => (
  <LazyLoadImage
    effect="blur"
    src={src}
    alt={alt}
    className={cn("w-full", className)}
    wrapperClassName="w-full"
  />
);
