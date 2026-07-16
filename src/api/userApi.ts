import axios from "axios";

const userApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }

});
//MANEJAR CONSULTAS , METERLE ALGUNA COSA
userApi.interceptors.request.use(config=>{

    console.log("REQUEST");

    return config;

});
//MANEJADOR DE RESPUESTAS
userApi.interceptors.response.use(response=>{

    return response;

},error=>{

    console.log(error);

    return Promise.reject(error);

});


export default userApi;