import {EMPTY_USER, User} from "../models/User.ts";
import {useEffect, useState} from "react";
import userService from "../services/userService.ts";
import useNetworkStatus from "./useNetworkStatus.ts";
import {getStoredUsers} from "../storage/userStorage.ts";


export default function useUser(id: number ) {
    const [ user, setUser] = useState<User|null>(null);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string | null>(null);
    const isOnline = useNetworkStatus();

    const getUser = async (id: number) => {
        setLoading(true);
        try{
            let user:User|undefined;

            if (isOnline) {
                user = await userService.getUserById(id);
                setUser(user);
            } else {
                const users:User[] = await getStoredUsers();
                user = users.find(person => person.id === id);
                if (user == undefined) user = EMPTY_USER;
            }
            setUser(user);
        } catch (errorRequest){
            console.error(errorRequest);
            setError("No fue posible cargar usuarios");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser(id);
    }, [id]);

    return {
        user,loading,error
    }
}

