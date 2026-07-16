import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../models/User";

const USERS_KEY = "users";


export async function saveUsers(users: User[]): Promise<void>{

    await AsyncStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


export async function getStoredUsers(): Promise<User[]>{

    const data = await AsyncStorage.getItem(USERS_KEY);

    return data
        ? JSON.parse(data) as User[]
        : [];

}