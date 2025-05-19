import { postRepository } from "@/repositories/post/json-post-repository";
import { CoverImage } from "../CoverImage";
import clsx from "clsx";
import { Heading } from "../Heading";

export async function PostsList() {
  const posts = await postRepository.findAll();
  const classes = clsx("grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3");
  const classesPost = clsx("flex flex-col gap-4 group");
  const dateTimeClasses = clsx("text-slate-600 block", "text-sm/tight");
  const titleTimeDivClasses = clsx("flex flex-col gap-4 sm:justify-center");

  return (
    <div className={classes}>
      {posts.map((post) => {
        const dateTime = post.createdAt;
        const excerpt = post.excerpt;
        const title = post.title;
        const postLink = `/posts/${post.slug}`

        return (
          <div className={classesPost} key={post.id}>
            <CoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />

            <div className={titleTimeDivClasses}>
              <time className={dateTimeClasses} dateTime={dateTime}>
                {dateTime}
              </time>
              <Heading linkUrl={postLink} as="h2">
                {title}
              </Heading>
              <p>{excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
