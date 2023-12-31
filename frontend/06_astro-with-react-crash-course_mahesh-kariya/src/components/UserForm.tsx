import { useStore } from "@nanostores/react";
import type { ChangeEvent, FormEvent } from "react";
import { user, users } from "src/store/user";

const UserForm = () => {
    const $user = useStore(user);
    const $users = useStore(users);

    const nextId = () => {
        return $users.length === 0
            ? 0
            : $users.reduce((max, curr) => Math.max(max, curr._id), 0) + 1;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        users.set(
            $user._id > 0
                ? $users.map((user) => ($user._id === user._id ? $user : user))
                : [...$users, { ...$user, _id: nextId() }]
        );

        user.set({
            _id: 0,
            name: "",
            email: "",
            password: "",
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        user.set({ ...$user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2 className="py-3 text-center text-3xl">Create User</h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-5 dark:bg-slate-800"
            >
                <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
                            htmlFor="grid-first-name"
                        >
                            Name
                        </label>
                        <input
                            name="name"
                            value={$user.name}
                            onChange={handleChange}
                            className="mb-3 block w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-800 focus:bg-white focus:outline-none"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                        />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
                            htmlFor="grid-last-name"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            value={$user.email}
                            onChange={handleChange}
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-800 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-last-name"
                            type="email"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-300"
                            htmlFor="grid-password"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            value={$user.password}
                            onChange={handleChange}
                            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-800 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="grid-password"
                            type="password"
                            placeholder="******************"
                        />
                        <p className="text-xs italic text-gray-200">
                            Make it as long and as crazy as you'd like
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
                >
                    Button
                </button>
            </form>
        </div>
    );
};

export default UserForm;
