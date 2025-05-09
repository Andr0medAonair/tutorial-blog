import clsx from "clsx";
import Link from "next/link";

type HeadingProps = {
  children: React.ReactNode;
  linkUrl: string;
  as?: "h1" | "h2"
};

export function Heading({ children, linkUrl, as: Tag = "h2" }: HeadingProps) {
  const classesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-2xl/tight sm:text-3xl",
  }
  const commonClasses = "font-extrabold"

  return (
    <Tag className={clsx(classesMap[Tag], commonClasses)}>
      <Link href={linkUrl}>{children}</Link>
    </Tag>
  );
}
