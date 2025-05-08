"use client";

import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  const colourClasses = clsx(
    "text-slate-900 bg-slate-300",
    "dark:text-slate-100 dark:bg-slate-900",
    "min-h-screen",
  );
  const sizeClasses = clsx("max-w-screen-lg mx-auto px-8");

  return (
    <div className={colourClasses}>
      <div className={sizeClasses}>{children}</div>
    </div>
  );
}
