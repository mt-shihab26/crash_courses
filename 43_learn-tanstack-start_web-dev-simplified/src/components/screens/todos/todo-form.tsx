import { Button } from '#/components/ui/button';
import { Input } from '#/components/ui/input';

export const TodoForm = () => {
    return (
        <form className="mb-6 flex gap-2">
            <Input name="title" placeholder="Add a new todo..." className="flex-1" />
            <Button type="submit">Add</Button>
        </form>
    );
};
