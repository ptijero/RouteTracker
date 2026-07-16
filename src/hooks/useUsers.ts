import {useEffect, useState} from "react";
import {User} from "../models/User.ts";
import userService from "../services/userService.ts";


export default function  useUsers() {
    const [ users, setUsers] = useState<User[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string | null>(null);


    const loadUsers = async () => {
        setLoading(true);
        try{
            const users:User[] = await userService.getAllUsers()
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
    },[])


    return {
        users, loading, error
    }
}