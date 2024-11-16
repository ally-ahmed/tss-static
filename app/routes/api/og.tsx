import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";
import { ImageResponse } from "@vercel/og";

export const Route = createAPIFileRoute("/api/og")({
  GET: ({ request, params }) => {
    const url = new URL(request.url);
    const heading = url.searchParams.get("heading");

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {heading ? `🤯 ${heading}` : "👋 Hello"}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  },
});
