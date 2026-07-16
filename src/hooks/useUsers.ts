import {useEffect, useState} from "react";
import {User} from "../models/User.ts";
import userService from "../services/userService.ts";
import useNetworkStatus from "./useNetworkStatus.ts";
import {getUsersRepository} from "../repositories/userRepositories.ts";


export default function  useUsers() {
    const [ users, setUsers] = useState<User[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string | null>(null);
    const isOnline = useNetworkStatus();

    const loadUsers = async () => {
        setLoading(true);
        try{
            //const users:User[] = await userService.getAllUsers()
            const users:User[] = await getUsersRepository(isOnline);
            setUsers(users);
        } catch (errorRequest){
            console.error(errorRequest);
            setError("No fue posible cargar usuarios");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    },[isOnline])


    return {
        users, loading, error
    }
}