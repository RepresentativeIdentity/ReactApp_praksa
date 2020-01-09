import { IVrstaStudijaDto } from './model';

export interface IVrstaStudija {
    vrstaStudija?: IVrstaStudijaDto;
    dispatch: any;
    error: boolean;
    // dohvatiStudenta: any;
}

export const initialState = {
    vrstaStudija: null,
    error: false
}