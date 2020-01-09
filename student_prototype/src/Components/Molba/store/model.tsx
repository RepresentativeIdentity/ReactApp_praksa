export interface IVrstaStudijaDto {
    vrstaStudijaNaziv: string,
    vrstaStudijaRazina: number,
    vrstaStudijaOznaka: string,
    tipStudijskogPrograma: string
}

export const StudentDto = {
    oib: '',
    jmbag: '',
    ime: '',
    prezime: '',
    spol: '',
    rodenjeDatum: Date,
    imeRoditelja: '',
    brIndeksa: '',
    pbrMjestaRodenja: '',
    pbrStanovanja: '',
    ulica: '',
    kucniBroj: '',
    telefon: '',
    mail: '',
    ulicaBoravista: '',
    kucniBrBoravista: '',
    _GodinaStudija: '',
    pravaDo_ISSP: Date,
    vU_ISSP: '',
    adresaPrebivalista_ISSP: '',
    mjestoStanovanja: '',
    mjestoRodjenja: ''
}

export const VrstaStudijaDto = {
    vrstaStudijaNaziv: '',
	vrstaStudijaRazina: '',
	vrstaStudijaOznaka: '',
	tipStudijskogPrograma: ''
}

export const MolbaDto = {
    InvaliditetInd: '',
	PotrebaZaPrilagodenomSobomInd: '',
	PotrebaZaAsistentomInd: '',
	MozeBitiSmjestenNaKatuInd: '',
	MozeBitiSmjestenNa1KatuInd: '',
	MozeBitiSmjestenNa2KatuInd: '',
	MozeBitiSmjestenNa3KatuInd: '',
	MozeBitiSmjestenNa4KatuInd: '',
	MozeBitiSmjestenUDvokrevetnojSobiInd: '',
	ApsolventZaostajanjeInd: '',
	ZalbaNegativnoInd: '',
	ZalbaPozitivnoInd: '',
	ZalbaUvjetnoInd: '',
	RektorovaNagradaBroj: '',
	DekanovaNagradaBroj: '',
	MedunarodnaNagradaBroj: '',
	DrzavnaNagradaBroj: '',
}

export const StudentUpdate = {
    jmbag: '',
    spol: '',
    rodenjeDatum: '',
    imeRoditelja: '',
    mjestoRodjenja: '',
    pbrMjestaRodenja: '',
    telefon: '',
    mail: '',
    mjestoStanovanja: '',
    pbrStanovanja: '',
    ulica: '',
    kucniBroj: '',
}