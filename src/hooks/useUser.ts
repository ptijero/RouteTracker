import {User} from "../models/User.ts";
import {useEffect, useState} from "react";
import userService from "../services/userService.ts";


export default function useUser(id: number ) {
    const [ user, setUser] = useState<User|null>(null);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string | null>(null);

    const getUser = async (id: number) => {
        setLoading(true);
        try{
            const user:User = await userService.getUserById(id)
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

