import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { Spinner } from "@/components/Spinner";
import { postRepository } from "@/repositories/post/json-post-repository";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  const classes = clsx("text-6xl", "font-bold", "text-center", "py-8");

  return (
    <Container>
      <header>
        <h1 className={classes}>Header</h1>
        <p className="text-justify py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem,
          non veritatis vitae natus unde eaque minus labore esse blanditiis,
          illo repudiandae rerum ipsum impedit sapiente, saepe illum. Aperiam,
          ratione.
        </p>
      </header>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className={classes}>Footer</p>
      </footer>
    </Container>
  );
}
