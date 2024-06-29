import { useQuery } from "@tanstack/react-query";

import User from '@homework-task/Interfaces/User.interface';
export const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    const users: User[] = data;

    return users;


};

export const usePlaceholderUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
}