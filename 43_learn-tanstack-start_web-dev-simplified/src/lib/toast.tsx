import type { CSSProperties } from 'react';

import { toast } from 'sonner';

export const toastInfo = (message: string, data?: object) => {
    toast(message, {
        description: data && (
            <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        position: 'bottom-right',
        classNames: {
            content: 'flex flex-col gap-2',
        },
        style: {
            '--border-radius': 'calc(var(--radius)  + 4px)',
        } as CSSProperties,
    });
};
