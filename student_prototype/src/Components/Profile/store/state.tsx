import { IStudentDto } from './model';

export interface IStudent {
    student?: IStudentDto;
    dispatch: any;
    error: boolean;
    dohvatiStudenta: any;
}

export const initialState = {
    student: null,
    error: false
}