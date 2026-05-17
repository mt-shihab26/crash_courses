import { useEffect, useState } from 'react';

import { Button } from '#/components/ui/button';
import { Skeleton } from '#/components/ui/skeleton';
import { ClientOnly } from '@tanstack/react-router';

const CounterButton = () => {
    const [count, setCount] = useState(Number(localStorage.getItem('count')) || 0);

    useEffect(() => {
        localStorage.setItem('count', `${count}`);
    }, [count]);

    return (
        <Button variant="outline" onClick={() => setCount((count) => count + 1)} className="w-12">
            {count}
        </Button>
    );
};

export const Counter = () => {
    return (
        <ClientOnly fallback={<Skeleton className="w-12 h-9" />}>
            <CounterButton />
        </ClientOnly>
    );
};
