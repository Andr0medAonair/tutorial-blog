import { PostsList } from "@/components/PostsList";
import { Spinner } from "@/components/Spinner";
import { postRepository } from "@/repositories/post/json-post-repository";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  const classes = clsx("text-6xl", "font-bold", "text-center", "py-8");

  return (
    <div>
      <header>
        <h1 className={classes}>Header</h1>
      </header>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className={classes}>Footer</p>
      </footer>
    </div>
  );
}
