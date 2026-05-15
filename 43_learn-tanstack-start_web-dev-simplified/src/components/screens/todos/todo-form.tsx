import { toastInfo } from '#/lib/toast';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const schema = z.object({
    title: z
        .string()
        .min(5, 'todo title must be at least 5 characters.')
        .max(255, 'todo title must be at most 255 characters.'),
});

export const TodoForm = () => {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        validators: {
            onSubmit: schema,
            onChange: schema,
        },
        onSubmit: ({ value }) => {
            toastInfo('You submitted the following values:', value);
        },
    });

    return (
        <form
            id="todo-form"
            className="space-y-4"
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
        >
            <FieldGroup>
                <form.Field
                    name="title"
                    children={(field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Todo</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Learn laravel"
                                    autoComplete="off"
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        );
                    }}
                />
            </FieldGroup>
            <Field orientation="horizontal" className="justify-between">
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                    Reset
                </Button>
                <Button type="submit" form="bug-report-form">
                    Submit
                </Button>
            </Field>
        </form>
    );
};
