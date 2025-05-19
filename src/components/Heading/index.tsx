import clsx from "clsx";
import Link from "next/link";
import { Url, UrlObject } from "url";

type HeadingProps = {
  children: React.ReactNode;
  linkUrl: string;
  as?: "h1" | "h2"
};

export function Heading({ children, linkUrl, as: Tag = "h2" }: HeadingProps) {
  const classesMap = {
    h1: "text-2xl/tight sm:text-4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  }
  const pointerClasses = "hover:text-slate-600 transition"
  const commonClasses = ""

  return (
    <Tag className={clsx(classesMap[Tag], commonClasses)}>
      <Link className={pointerClasses} href={linkUrl}>{children}</Link>
    </Tag>
  );
}
