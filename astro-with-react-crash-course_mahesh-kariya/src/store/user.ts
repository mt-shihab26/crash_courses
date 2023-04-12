import { atom } from "nanostores";

type User = {
    _id: number;
    name: string;
    email: string;
    password: string;
};

export const user = atom<User>({
    _id: 0,
    name: "",
    email: "",
    password: "",
});

export const users = atom<User[]>([
    {
        _id: 1,
        name: "Shihab Mahamud",
        email: "shihab4t@gmail.com",
        password: "123456",
    },
    {
        _id: 2,
        name: "Shawon",
        email: "shawon@gmail.com",
        password: "123456",
    },
]);
