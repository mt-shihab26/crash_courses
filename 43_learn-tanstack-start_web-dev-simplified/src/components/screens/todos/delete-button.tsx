import type { TTodo } from '#/db/schema';

import { deleteTodo } from '#/actions/todos';
import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';

import { Button } from '#/components/ui/button';
import { Spinner } from '#/components/ui/spinner';
import { Trash2 } from 'lucide-react';

export const DeleteButton = ({ todo }: { todo: TTodo }) => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive"
            onClick={async () => {
                setLoading(true);
                try {
                    await deleteTodo({ data: todo.id });
                    router.invalidate();
                } finally {
                    setLoading(false);
                }
            }}
        >
            {loading && <Spinner className="size-4" />}
            {!loading && <Trash2 className="size-4" />}
        </Button>
    );
};
