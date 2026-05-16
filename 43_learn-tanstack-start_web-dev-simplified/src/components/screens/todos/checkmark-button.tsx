import type { TTodo } from '#/db/schema';

import { toggleComplete } from '#/actions/todos';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { Checkbox } from '#/components/ui/checkbox';

export const CheckmarkButton = ({ todo }: { todo: TTodo }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    return (
        <Checkbox
            checked={loading || todo.completedAt != null}
            onClick={async () => {
                try {
                    setLoading(true);
                    await toggleComplete({ data: todo.id });
                    navigate({ to: '/todos' });
                } finally {
                    setLoading(false);
                }
            }}
        />
    );
};
