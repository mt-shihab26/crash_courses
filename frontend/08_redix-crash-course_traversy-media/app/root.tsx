import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Layout from "./components/Layout";
import styles from "./styles.css";

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: styles,
    },
];

const App = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Layout>
                    <Outlet />
                </Layout>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};

export default App;
