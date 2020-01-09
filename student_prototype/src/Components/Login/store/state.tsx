import { ITokenDto } from './model';

export interface ILogin {
    auth?: ITokenDto;
    login?: boolean;
    error?: boolean;
};

export const initialState = {
    auth: null,
    error: false,
    login: false
}