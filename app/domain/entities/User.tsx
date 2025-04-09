export interface UserInterface{
    id?: number,
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    age: number,
    phone: string,
    slug?: string,
}

export type UserLoginRequest = Pick<UserInterface, "email" | "password">

export interface UserLoginResponse extends UserInterface{
    token?: {
        refresh: string,
        access: string
    }
}