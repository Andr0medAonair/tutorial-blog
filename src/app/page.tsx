import { Container } from "@/components/Container";
import { CoverImage } from "@/components/CoverImage";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
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
  const dateTimeClasses = clsx("text-slate-600 block", "text-sm/tight");
  const titleTimeDivClasses = clsx("flex flex-col gap-4 sm:justify-center");

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
        
        <div className={titleTimeDivClasses}>
          <time className={dateTimeClasses} dateTime="2025-04-20">
            20/04/2025 10:00
          </time>
          <Heading linkUrl="#" as="h1">
            Rerum, vel ex? Impedit ullam harum blanditiis
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
        </div>
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
