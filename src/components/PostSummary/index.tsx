import { clsx } from "clsx";
import { Heading } from "../Heading";
import { formatDatetime, formatRelativeDate } from "@/utils/datetime-utils";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  const dateTimeClasses = clsx("text-slate-600 block", "text-sm/tight");
  const titleTimeDivClasses = clsx("flex flex-col gap-4 sm:justify-center");

  return (
    <div className={titleTimeDivClasses}>
      <time
        className={dateTimeClasses}
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <Heading as={postHeading} linkUrl={postLink}>
        {title}
      </Heading>

      <p>{excerpt}</p>
    </div>
  );
}
