import React from "react";
import clsx from "clsx";
import { Heading } from "../Heading";
import { formatRelativeDate, formatDatetime } from "@/utils/datetime-utils";

interface HighlightedPostProps {
  date: string;
  title: string;
  content: string;
}

export async function HighlightedPost({
  date = "2025-04-20",
  title,
  content,
}: HighlightedPostProps) {
  const dateTimeClasses = clsx("text-slate-600 block", "text-sm/tight");
  const titleTimeDivClasses = clsx("flex flex-col gap-4 sm:justify-center");

  return (
    <div className={titleTimeDivClasses}>
      <time
        className={dateTimeClasses}
        dateTime={date}
        title={formatRelativeDate(date)}
      >
        {formatDatetime(date)}
      </time>
      <Heading linkUrl="#" as="h1">
        {title}
      </Heading>
      <p>{content}</p>
    </div>
  );
}
