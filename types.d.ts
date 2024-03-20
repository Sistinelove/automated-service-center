export interface Orders {
    Description: string;
    dateIsStart: number;
    expirationDate: number;
    status: string;
    userId: number;
}

export interface Users {
    firts_name: string;
    last_name: string;
    middle_name: string;
}

interface Client {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    email: string;
}