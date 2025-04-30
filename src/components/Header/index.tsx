"use client";

import clsx from "clsx";
import { Spinner } from "../Spinner";

export function Header() {
  const classes = clsx("bg-amber-500", " h-[500px]");

  return (
    <div>
      <Spinner className={classes} />
    </div>
  );
}
