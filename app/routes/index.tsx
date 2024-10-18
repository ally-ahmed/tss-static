import { Button } from "@/components/ui/button";
import { createFileRoute, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6">
      <h1 className="text-3xl font-semibold">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
