import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { Spinner } from "@/components/Spinner";
import { postRepository } from "@/repositories/post/json-post-repository";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Heading } from "@/components/Heading";

export default async function HomePage() {
  const classes = clsx("text-6xl", "font-bold", "text-center", "py-8");
  const columnClasses = clsx(
    "grid grid-cols-1 gap-8 mb-16",
    "sm:grid-cols-2 group"
  );
  const linkImageClasses = clsx(
    "w-full h-full object-cover object-center group-hover:scale-105 transition"
  );
  const linkClasses = clsx("w-full h-full overflow-hidden rounded-xl");
  const dateTimeClasses = clsx("text-slate-600 block", "text-sm/tight");
  const titleClasses = clsx("text-2xl/tight font-extrabold", "sm:text-4xl");
  const titleTimeDivClasses = clsx("flex flex-col gap-4 sm:justify-center");

  return (
    <Container>
      <Header />
      <section className={columnClasses}>
        <Link className={linkClasses} href="#####">
          <Image
            className={linkImageClasses}
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Post Title"
            priority
          />
        </Link>
        <div className={titleTimeDivClasses}>
          <time className={dateTimeClasses} dateTime="2025/05/08">
            08/05/2025 14:00
          </time>
          <Heading linkUrl="#" as="h1">
            Lorem ipsum
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            laboriosam aliquam beatae sit velit vero non debitis amet enim
            reprehenderit? Incidunt nesciunt itaque dolore qui! Autem minus
            quidem doloribus maxime.
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
