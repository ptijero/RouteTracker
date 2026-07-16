import userApi from "../api/userApi.ts";
import {User} from "../models/User.ts";

async function getAllUsers() : Promise<User[]> {
    try {
        const response =  await userApi.get<User[]>("/users");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

async function getUserById(id: number): Promise<User> {

    try {
        const data = await userApi.get<User>(`/users/${id}`);
        return data.data;
    } catch (error: any) {
        console.error(error);
        throw error;
    }

}

export default  {
    getAllUsers,
    getUserById,
}