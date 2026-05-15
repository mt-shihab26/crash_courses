import { TanStackDevtools } from '@tanstack/react-devtools';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import styles from '../styles.css?url';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'TanStack Start Starter',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: styles,
            },
        ],
    }),
    shellComponent: ({ children }) => {
        return (
            <html lang="en" className="dark">
                <head>
                    <HeadContent />
                </head>
                <body>
                    <div className="min-h-screen bg-background py-10">
                        <div className="mx-auto max-w-3xl flex flex-col gap-4 px-4">{children}</div>
                    </div>
                    <TanStackDevtools
                        config={{
                            position: 'bottom-right',
                        }}
                        plugins={[
                            {
                                name: 'Tanstack Router',
                                render: <TanStackRouterDevtoolsPanel />,
                            },
                        ]}
                    />
                    <Scripts />
                </body>
            </html>
        );
    },
    notFoundComponent: () => {
        return <div>404 | Page not found</div>;
    },
});
