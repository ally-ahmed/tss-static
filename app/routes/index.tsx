import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
// import { allPosts } from "content-collections";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6">
      <h1 className="text-3xl font-semibold">Hello World 🏝️</h1>
      <Button>Click me</Button>
      <h1>
        <Link to="/blog">Blog</Link>
      </h1>
      {/* <ul> */}
      {/*   {allPosts.map((post) => ( */}
      {/*     <li key={post._meta.path}> */}
      {/*       <h3> */}
      {/*         <Link to="/blog/$slug" params={{ slug: post._meta.path }}> */}
      {/*           {post.title} */}
      {/*         </Link> */}
      {/*       </h3> */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
}
