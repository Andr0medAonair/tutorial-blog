import { PostModel } from "@/models/post/postModel";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);
const SIMULATE_WAIT_IN_MS = 1;

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedContent = JSON.parse(jsonContent);
    const { posts } = parsedContent;
    return posts;
  }

  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait()

    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait()

    const posts = await this.findAll();
    const post = posts.find((post) => {
      return post.id === id;
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();

// postRepository.findAll().then(jsonContent => console.log(jsonContent))
// (async () => {
//   const posts = await postRepository.findAll();
//   console.log(posts);
// })();
