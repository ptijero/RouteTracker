export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
    address: {
        street: string;
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

export const EMPTY_USER: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: "",
    },
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "0",
            lng: "0",
        },
    },
};