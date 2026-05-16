import type { TTodo } from '#/db/schema';

import { toggleComplete } from '#/actions/todos';
import { useState } from 'react';

import { Checkbox } from '#/components/ui/checkbox';

export const CheckmarkButton = ({ todo }: { todo: TTodo }) => {
    const [loading, setLoading] = useState(false);

    return (
        <Checkbox
            checked={todo.completedAt != null}
            disabled={loading}
            onClick={() => {
                try {
                    setLoading(true);
                    toggleComplete({ data: todo.id });
                } finally {
                    setLoading(false);
                }
            }}
        />
    );
};
