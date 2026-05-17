import type { TTodo } from '#/db/schema';

import { todoFormSchema } from '#/actions/todos';
import { toastInfo } from '#/lib/toast';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

import { Spinner } from '#/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

type TTodoFormSchema = z.infer<typeof todoFormSchema>;

export const TodoForm = ({
    todo,
    onSubmit,
}: {
    todo?: TTodo;
    onSubmit: (value: TTodoFormSchema) => Promise<void>;
}) => {
    const form = useForm({
        defaultValues: {
            title: todo?.title || '',
        },
        validators: {
            onSubmit: todoFormSchema,
            onChange: todoFormSchema,
        },
        onSubmit: async ({ value }) => {
            toastInfo('You submitted the following values:', value);
            await onSubmit(value);
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
                                    autoFocus
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        );
                    }}
                />
            </FieldGroup>
            <Field orientation="horizontal" className="justify-between">
                <form.Subscribe
                    selector={(state) => ({
                        loading: state.isSubmitting,
                        disabled: !state.canSubmit || state.isSubmitting,
                    })}
                >
                    {(data) => (
                        <Button type="submit" form="todo-form" disabled={data.disabled}>
                            {data.loading && <Spinner />}
                            Submit
                        </Button>
                    )}
                </form.Subscribe>
            </Field>
        </form>
    );
};
