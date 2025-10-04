import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Structured Enum',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">{children}</section>;
}
