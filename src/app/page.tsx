import { Container } from "@/components/Container";
import { CoverImage } from "@/components/CoverImage";
import { Header } from "@/components/Header";
import { HighlightedPost } from "@/components/HighlightedPost";
import { PostsList } from "@/components/PostsList";
import { Spinner } from "@/components/Spinner";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  const classes = clsx("text-6xl", "font-bold", "text-center", "py-8");
  const columnClasses = clsx(
    "grid grid-cols-1 gap-8 mb-16",
    "sm:grid-cols-2 group"
  );

  return (
    <Container>
      <Header />
      <section className={columnClasses}>
        <CoverImage
          linkProps={{
            href: "/post/asdfasdf",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true,
          }}
        />

        <HighlightedPost
          title="Rerum, vel ex? Impedit ullam harum blanditiis"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit dolorem est dolor porro, doloribus neque, quidem mollitia doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis mollitia?"
        />
      </section>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className={classes}>Footer</p>
      </footer>
    </Container>
  );
}
