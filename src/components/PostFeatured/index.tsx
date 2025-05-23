import clsx from "clsx";
import { CoverImage } from "../CoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const classes = clsx("grid grid-cols-1 gap-8 mb-16", "sm:grid-cols-2 group");
  const slug = "highlighted";
  const postLink = `/post/${slug}`;

  return (
    <section className={classes}>
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

      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={"2025-04-08T00:24:38.616Z"}
        excerpt={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit dolorem est dolor porro, doloribus neque, quidem mollitia doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis mollitia?"
        }
        title={"Rerum, vel ex? Impedit ullam harum blanditiis"}
      />
    </section>
  );
}
