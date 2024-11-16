import { Mdx } from "@/components/mdx-components";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import "@/styles/mdx.css";
import mdxCss from "@/styles/mdx.css?url";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const slug = params.slug;
    const post = allPosts.find((post) => post._meta.path === slug);
    if (!post) {
      throw redirect({
        to: "/blog",
      });
    }
    return post;
  },
  meta: ({ loaderData }) => {
    const url = import.meta.env.VITE_APP_BASE_URL;
    const ogUrl = new URL(`${"http://localhost:3000"}/api/og`);
    ogUrl.searchParams.set("heading", loaderData.title);
    console.log(ogUrl.toString());
    return seo({ title: loaderData.title, image: ogUrl.toString() });
  },
  links: () => [{ rel: "stylesheet", href: mdxCss }],
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
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex-1">
        <div className="container relative max-w-3xl py-6 lg:py-10">
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <article className="">
            <Mdx code={post?.mdx} />
          </article>
        </div>
      </main>
    </div>
  );
}
