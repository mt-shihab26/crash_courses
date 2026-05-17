import type { TTodo } from '#/db/schema';

import { toggleComplete } from '#/actions/todos';
import { useRouter } from '@tanstack/react-router';
import { useState } from 'react';

import { Checkbox } from '#/components/ui/checkbox';

export const CheckmarkButton = ({ todo }: { todo: TTodo }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    return (
        <Checkbox
            disabled={loading}
            checked={todo.completedAt != null}
            onClick={async () => {
                try {
                    setLoading(true);
                    await toggleComplete({ data: todo.id });
                    router.invalidate();
                } finally {
                    setLoading(false);
                }
            }}
        />
    );
};
