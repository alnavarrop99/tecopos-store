import { type Route } from './+types/root'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import stylesheet from "./app.css?url";
import icon from "./assets/icon.svg?url";

import { action as addOne } from "~/routes/cart/addOne";
import { action as minusOne } from "~/routes/cart/minusOne";
import { action as clear } from "~/routes/cart/clear";

export const meta: Route.MetaFunction = () => [
  { title: 'Fakestore', content: 'fake articles' }
]

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: icon, type: 'image/svg' },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const action = async ( { request }: Route.ActionArgs ) => {
  const form = await request.formData()
  const call = {
    addOne,
    minusOne,
    clear
  } as const

  const value = Array.from(form.values())[0] as keyof typeof call
  const body = Object.fromEntries(form.entries())

  return call[value]( new Request(request.url, {
    headers: request.headers,
    body: JSON.stringify(body),
    method: request.method
  }))
}


export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
