import clsx from "clsx";

type SpinnerProps = {
  className?: string;
};

export function Spinner({ className = "" }: SpinnerProps) {
  const classesContainer = clsx(
    "flex",
    "items-center",
    "justify-center",
    className
  );
  const classesSpinner = clsx(
    "w-10 h-10",
    "border-5 border-t-transparent border-slate-900",
    "rounded-full",
    "animate-spin"
  );

  return (
    <div className={classesContainer}>
      <div className={classesSpinner}></div>
    </div>
  );
}
