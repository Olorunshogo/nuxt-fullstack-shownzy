
export type FormValidation = {
    hasErrors: boolean;
    errors?: Map<string, FormErrors> ;
};

export type FormErrors = {
    field: string;
    check: InputValidation;
}