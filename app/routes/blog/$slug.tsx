import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/blog/$slug")({
  component: Post,
});

function Post() {
  const { slug } = useParams({ strict: false });
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    throw redirect({
      to: "/blog",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24">
      {
        <div>
          {post.title}
          {allPosts.length > 0 ? (
            <MDXContent code={post?.mdx} />
          ) : (
            <p>No post</p>
          )}
        </div>
      }
    </div>
  );
}
