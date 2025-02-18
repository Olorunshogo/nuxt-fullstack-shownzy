
export type IResgistrationErrors = {
    hasErrors?: string
}

export type RegistrationResponse = {
    hasErrors: boolean,
    errors?: IResgistrationErrors
}

export type RegistrationRequest = {
    name: string,
    username?: string
    email?: string
    password?: string
}