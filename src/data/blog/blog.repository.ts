// src/data/blog/blog.repository.ts

import { BLOG_POSTS } from "./blog.data";

export const getAllBlogs = () => BLOG_POSTS;

export const getBlogBySlug = (slug: string) =>
  BLOG_POSTS.find((b) => b.slug === slug);
