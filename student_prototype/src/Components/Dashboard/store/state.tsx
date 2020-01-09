import { IStudentDto } from './model';

export interface IStudent {
    student?: IStudentDto;
    error: boolean;
    history: any;
}

export const initialState = {
    student: null,
    error: false
}