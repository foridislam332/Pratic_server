
export type userName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type Student = {
    id: string;
    name: userName;
    gender: "male" | "female";
    role: "student" | "admin";
    email: string;
    avatar?: string;
}