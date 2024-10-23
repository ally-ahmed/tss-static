import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen flex items-center flex-col pt-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Articles
      </h1>
      <ul className="p-8">
        {allPosts.map((post) => (
          <Link
            key={post._meta.path}
            to="/blog/$slug"
            params={{ slug: post._meta.path }}
          >
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
