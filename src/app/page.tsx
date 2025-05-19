import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { Spinner } from "@/components/Spinner";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  const classes = clsx("text-6xl", "font-bold", "text-center", "py-8");

  return (
    <Container>
      <Header />
      <Suspense fallback={<Spinner />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className={classes}>Footer</p>
      </footer>
    </Container>
  );
}
