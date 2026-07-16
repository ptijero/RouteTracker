import {
    saveUsers,
    getStoredUsers
} from "../storage/userStorage";
import userService from "../services/userService.ts";
import {User} from "../models/User.ts";

export async function getUsersRepository(
    isOnline:boolean
):Promise<User[]> {

    if(isOnline){

        const users = await userService.getAllUsers()

        await saveUsers(users);

        return users;
    }


    return await getStoredUsers();

}