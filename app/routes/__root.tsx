// import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import appCss from "@/styles/globals.css?url";
import "@fontsource-variable/bricolage-grotesque";
import fontHeading from "@fontsource-variable/bricolage-grotesque?url";
import "@fontsource-variable/inter";
import fontInter from "@fontsource-variable/inter?url";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import * as React from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TanStack Start Starter" },
    ],
    links: [
      { rel: "stylesheet", href: fontInter },
      { rel: "stylesheet", href: fontHeading },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* <ThemeProvider */}
        {/*   attribute="class" */}
        {/*   defaultTheme="system" */}
        {/*   enableSystem */}
        {/*   disableTransitionOnChange */}
        {/* > */}
        {children}
        {/* </ThemeProvider> */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
