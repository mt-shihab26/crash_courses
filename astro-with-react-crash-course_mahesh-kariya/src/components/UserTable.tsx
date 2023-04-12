import { useStore } from "@nanostores/react";
import { user, users } from "src/store/user";

const UserTable = () => {
    const $users = useStore(users);

    const handleEdit = (_id: number) => {
        const usr = $users.find((user) => user._id === _id);
        if (usr) {
            user.set(usr);
        }
    };

    const handleDelete = (_id: number) => {
        users.set($users.filter((user) => user._id !== _id));
    };

    return (
        <div className="my-5">
            <h2 className=" py-3 text-center text-3xl">User List</h2>
            <table className="w-full table-auto border-collapse text-sm">
                <thead>
                    <tr>
                        <th className="border-b p-4 pb-3 pl-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                            Name
                        </th>
                        <th className="border-b p-4 pb-3 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                            Email
                        </th>
                        <th className="border-b p-4 pb-3 pr-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                            Edit
                        </th>
                        <th className="border-b p-4 pb-3 pr-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    {$users.map((user) => (
                        <tr>
                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                {user.name}
                            </td>
                            <td className="border-b border-slate-100 p-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                {user.email}
                            </td>
                            <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                <button onClick={() => handleEdit(user._id)}>
                                    edit
                                </button>
                            </td>
                            <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                                <button onClick={() => handleDelete(user._id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
