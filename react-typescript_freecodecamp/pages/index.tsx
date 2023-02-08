import Head from "next/head";
import type { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>React TypeScript Todo APP</title>
                <meta
                    name="description"
                    content="This is a todo app build with react & typescript"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main></main>
        </>
    );
};

export default Home;
