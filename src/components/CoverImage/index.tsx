import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

type CoverImageProps = {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

export function CoverImage({ imageProps, linkProps }: CoverImageProps) {
  const imageClasses =
    "w-full h-full object-cover object-center group-hover:scale-105 transition";
  const linkClasses = "w-full h-full overflow-hidden rounded-xl";

  return (
    <Link
      {...linkProps}
      className={clsx(linkClasses, linkProps.className)}
      href={linkProps.href}
    >
      <Image
        {...imageProps}
        className={clsx(imageClasses, imageProps.className)}
      />
    </Link>
  );
}
