import * as React from 'react';
import { Card, Container, Row, Col, Button, Label } from 'reactstrap';
import styles from './store/styles';
import {useState} from 'react';
import {useEffect} from 'react';
import {getStudent, updateStudent} from '../../api/api';
import {StudentDto, StudentUpdate} from './store/model';
import LoadingScreen from 'react-loading-screen';
import swal from 'sweetalert';

// class Molba extends React.Component {
function Molba() {
    
   
    const [brPrijave] = useState('842528');
    const [student, setStudent] = useState(StudentDto);
    const [updateStateStudent, setUpdateStudent] = useState(StudentUpdate);
    const [loading, setLoading] = useState(true);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = day+ '.' + month + '.' + year + '.';

    const [jmbag, setJmbag] = useState('');
    const [spol, setSpol] = useState('M');
    const [imeRoditelja, setImeRoditelja] = useState('');
    const [datum, setDatumRodenja] = useState('');
    const [drzavljanstvo, setDrzavljanstvo] = useState('Afghanistan');
    const [drzavaRodenja, setDrzavaRodenja] = useState('Afghanistan');
    const [mjestoRodenja, setMjestoRodenja] = useState('');
    const [postbrRodenja, setPostbrRodenja] = useState('');
    const [email, setEmail] = useState('');
    const [mobitel, setMobitel] = useState('');
    const [drzavaStanovanja, setDrzavaStanovanja] = useState('Afghanistan');
    const [mjestoStanovanja, setMjestoStanovanja] = useState('');
    const [postbrStanovanja, setPostbrStanovanja] = useState('');
    const [ulicaStanovanja, setUlicaStanovanja] = useState('');
    const [kucniBroj, setKucniBroj] = useState('');
    const [uciliste, setUciliste] = useState('none');
    const [vrstaStudija, setVrstaStudija] = useState('none');
    const [studij, setStudij] = useState('none');

    const [vrstaMolbe, setVrstaMolbe] = useState('none');
    const [kategorijaSmjestaja, setKategorijaSmjestaja] = useState('none');
    const [kategorijaSmjestaja2, setKategorijaSmjestaja2] = useState('none');
    const [invalidnost, setInvalidnost] = useState(false);

    // const [postVrstaStudija, setPostVrstaStudija] = useState(VrstaStudijaDto);
    const [save, setSave] = useState(false);
    const [molbaState, setMoblaState] = useState('Started');
    const [isValid, setIsValid] = useState(false);

    const [edited, setEdited] = useState(false);
    const [canDelete, setCanDelete] = useState(false);

    useEffect(async () => {
        let data = await getStudent();
        setStudent(data);
        setLoading(false);
    },[]); 
    // console.log(save);
    // render() {
       //  if(!student) {return null;}
       if(!student || loading) {return (
                <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#262626'
                textColor='#676767'
                logoSrc=''
                text='Loading'
            >Loading</LoadingScreen>
       )}
       // console.log('provjera', (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
        console.log("validation:", isValid)
       // console.log("Oznaka", ulicaStanovanja);
       // console.log(mobitel.match('^[+,/,-, ,0-9]+$'));
       // console.log("Datum: ", today);
        return (
            <Container style={styles.CardContext}>
            <Card>

                <Row> {/*prvi red*/}
                    <Col sm='6' xs='11' style={styles.HeaderInfo}>
                        <Row>
                            Registration number: {brPrijave}
                        </Row>
                        <br />
                        <Row style={{ fontSize: 18, fontWeight: 500 }}>
                            Request for accommodation in student residence
                        </Row>
                    </Col>
                    <Col sm='3' xs='11' style={styles.HeaderInfo}>
                        <Row>Student: {student.ime} {student.prezime}</Row>
                        <Row>Date: {date}</Row>
                        <Row>Status: {molbaState}</Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <hr style={styles.HR} />
                    </Col>
                </Row>
                
                <Container style={styles.titleContainer} >
                    <Row style={styles.titleBackground}>
                        <Col style={styles.titleText}>
                            Personal student information
                        </Col>
                    </Row>
                </Container>

                {/*Tijelo forme*/}
                <Row style={{ marginBottom: '2%', marginTop: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Full name</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>{student.ime} {student.prezime}</Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>PIN</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>{student.oib}</Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>UMCN</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                     {(jmbag.match('^[0-9]+$') === null || jmbag.length !== 13)? 
                        <input onChange={setJmbg} value={jmbag} style={styles.inputIncorrect}/> 
                        :
                        <input onChange={setJmbg} value={jmbag} style={styles.inputWidth} />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>JMBAG</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>{student.jmbag}</Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Gender</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        <select onChange={setSp} value={spol} style={styles.inputWidth}>
                            <option value="M">Male</option>
                            <option value="Z">Female</option>
                        </select></Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Date of birth</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {datum.length < 1?
                        <input onChange={setDatumRod} value={datum} type='date' style={styles.inputIncorrect}  />
                        :
                        <input onChange={setDatumRod} value={datum} type='date' style={styles.inputWidth}  />
                    }
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Father's or Mother's name </Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(imeRoditelja.match('^[A-Ža-ž]+$') === null || imeRoditelja.length < 3)?
                         <input onChange={setImeRod} value={imeRoditelja} style={styles.inputIncorrect}  />
                         :
                         <input onChange={setImeRod} value={imeRoditelja} style={styles.inputWidth}  />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={{ fontWeight: 'bold', marginBottom: '1%'  }} />
                    <Col sm='3' xs='11' style={{ textAlign: 'start', marginBottom: '1%'  }} />
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Nationality</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        <select onChange={setDrzav} value={drzavljanstvo} style={styles.inputWidth} >
                        <option value="afghan">Afghan</option>
                        <option value="albanian">Albanian</option>
                        <option value="algerian">Algerian</option>
                        <option value="american">American</option>
                        <option value="andorran">Andorran</option>
                        <option value="angolan">Angolan</option>
                        <option value="antiguans">Antiguans</option>
                        <option value="argentinean">Argentinean</option>
                        <option value="armenian">Armenian</option>
                        <option value="australian">Australian</option>
                        <option value="austrian">Austrian</option>
                        <option value="azerbaijani">Azerbaijani</option>
                        <option value="bahamian">Bahamian</option>
                        <option value="bahraini">Bahraini</option>
                        <option value="bangladeshi">Bangladeshi</option>
                        <option value="barbadian">Barbadian</option>
                        <option value="barbudans">Barbudans</option>
                        <option value="batswana">Batswana</option>
                        <option value="belarusian">Belarusian</option>
                        <option value="belgian">Belgian</option>
                        <option value="belizean">Belizean</option>
                        <option value="beninese">Beninese</option>
                        <option value="bhutanese">Bhutanese</option>
                        <option value="bolivian">Bolivian</option>
                        <option value="bosnian">Bosnian</option>
                        <option value="brazilian">Brazilian</option>
                        <option value="british">British</option>
                        <option value="bruneian">Bruneian</option>
                        <option value="bulgarian">Bulgarian</option>
                        <option value="burkinabe">Burkinabe</option>
                        <option value="burmese">Burmese</option>
                        <option value="burundian">Burundian</option>
                        <option value="cambodian">Cambodian</option>
                        <option value="cameroonian">Cameroonian</option>
                        <option value="canadian">Canadian</option>
                        <option value="cape verdean">Cape Verdean</option>
                        <option value="central african">Central African</option>
                        <option value="chadian">Chadian</option>
                        <option value="chilean">Chilean</option>
                        <option value="chinese">Chinese</option>
                        <option value="colombian">Colombian</option>
                        <option value="comoran">Comoran</option>
                        <option value="congolese">Congolese</option>
                        <option value="costa rican">Costa Rican</option>
                        <option value="croatian">Croatian</option>
                        <option value="cuban">Cuban</option>
                        <option value="cypriot">Cypriot</option>
                        <option value="czech">Czech</option>
                        <option value="danish">Danish</option>
                        <option value="djibouti">Djibouti</option>
                        <option value="dominican">Dominican</option>
                        <option value="dutch">Dutch</option>
                        <option value="east timorese">East Timorese</option>
                        <option value="ecuadorean">Ecuadorean</option>
                        <option value="egyptian">Egyptian</option>
                        <option value="emirian">Emirian</option>
                        <option value="equatorial guinean">Equatorial Guinean</option>
                        <option value="eritrean">Eritrean</option>
                        <option value="estonian">Estonian</option>
                        <option value="ethiopian">Ethiopian</option>
                        <option value="fijian">Fijian</option>
                        <option value="filipino">Filipino</option>
                        <option value="finnish">Finnish</option>
                        <option value="french">French</option>
                        <option value="gabonese">Gabonese</option>
                        <option value="gambian">Gambian</option>
                        <option value="georgian">Georgian</option>
                        <option value="german">German</option>
                        <option value="ghanaian">Ghanaian</option>
                        <option value="greek">Greek</option>
                        <option value="grenadian">Grenadian</option>
                        <option value="guatemalan">Guatemalan</option>
                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                        <option value="guinean">Guinean</option>
                        <option value="guyanese">Guyanese</option>
                        <option value="haitian">Haitian</option>
                        <option value="herzegovinian">Herzegovinian</option>
                        <option value="honduran">Honduran</option>
                        <option value="hungarian">Hungarian</option>
                        <option value="icelander">Icelander</option>
                        <option value="indian">Indian</option>
                        <option value="indonesian">Indonesian</option>
                        <option value="iranian">Iranian</option>
                        <option value="iraqi">Iraqi</option>
                        <option value="irish">Irish</option>
                        <option value="israeli">Israeli</option>
                        <option value="italian">Italian</option>
                        <option value="ivorian">Ivorian</option>
                        <option value="jamaican">Jamaican</option>
                        <option value="japanese">Japanese</option>
                        <option value="jordanian">Jordanian</option>
                        <option value="kazakhstani">Kazakhstani</option>
                        <option value="kenyan">Kenyan</option>
                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                        <option value="kuwaiti">Kuwaiti</option>
                        <option value="kyrgyz">Kyrgyz</option>
                        <option value="laotian">Laotian</option>
                        <option value="latvian">Latvian</option>
                        <option value="lebanese">Lebanese</option>
                        <option value="liberian">Liberian</option>
                        <option value="libyan">Libyan</option>
                        <option value="liechtensteiner">Liechtensteiner</option>
                        <option value="lithuanian">Lithuanian</option>
                        <option value="luxembourger">Luxembourger</option>
                        <option value="macedonian">Macedonian</option>
                        <option value="malagasy">Malagasy</option>
                        <option value="malawian">Malawian</option>
                        <option value="malaysian">Malaysian</option>
                        <option value="maldivan">Maldivan</option>
                        <option value="malian">Malian</option>
                        <option value="maltese">Maltese</option>
                        <option value="marshallese">Marshallese</option>
                        <option value="mauritanian">Mauritanian</option>
                        <option value="mauritian">Mauritian</option>
                        <option value="mexican">Mexican</option>
                        <option value="micronesian">Micronesian</option>
                        <option value="moldovan">Moldovan</option>
                        <option value="monacan">Monacan</option>
                        <option value="mongolian">Mongolian</option>
                        <option value="moroccan">Moroccan</option>
                        <option value="mosotho">Mosotho</option>
                        <option value="motswana">Motswana</option>
                        <option value="mozambican">Mozambican</option>
                        <option value="namibian">Namibian</option>
                        <option value="nauruan">Nauruan</option>
                        <option value="nepalese">Nepalese</option>
                        <option value="new zealander">New Zealander</option>
                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                        <option value="nicaraguan">Nicaraguan</option>
                        <option value="nigerien">Nigerien</option>
                        <option value="north korean">North Korean</option>
                        <option value="northern irish">Northern Irish</option>
                        <option value="norwegian">Norwegian</option>
                        <option value="omani">Omani</option>
                        <option value="pakistani">Pakistani</option>
                        <option value="palauan">Palauan</option>
                        <option value="panamanian">Panamanian</option>
                        <option value="papua new guinean">Papua New Guinean</option>
                        <option value="paraguayan">Paraguayan</option>
                        <option value="peruvian">Peruvian</option>
                        <option value="polish">Polish</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="qatari">Qatari</option>
                        <option value="romanian">Romanian</option>
                        <option value="russian">Russian</option>
                        <option value="rwandan">Rwandan</option>
                        <option value="saint lucian">Saint Lucian</option>
                        <option value="salvadoran">Salvadoran</option>
                        <option value="samoan">Samoan</option>
                        <option value="san marinese">San Marinese</option>
                        <option value="sao tomean">Sao Tomean</option>
                        <option value="saudi">Saudi</option>
                        <option value="scottish">Scottish</option>
                        <option value="senegalese">Senegalese</option>
                        <option value="serbian">Serbian</option>
                        <option value="seychellois">Seychellois</option>
                        <option value="sierra leonean">Sierra Leonean</option>
                        <option value="singaporean">Singaporean</option>
                        <option value="slovakian">Slovakian</option>
                        <option value="slovenian">Slovenian</option>
                        <option value="solomon islander">Solomon Islander</option>
                        <option value="somali">Somali</option>
                        <option value="south african">South African</option>
                        <option value="south korean">South Korean</option>
                        <option value="spanish">Spanish</option>
                        <option value="sri lankan">Sri Lankan</option>
                        <option value="sudanese">Sudanese</option>
                        <option value="surinamer">Surinamer</option>
                        <option value="swazi">Swazi</option>
                        <option value="swedish">Swedish</option>
                        <option value="swiss">Swiss</option>
                        <option value="syrian">Syrian</option>
                        <option value="taiwanese">Taiwanese</option>
                        <option value="tajik">Tajik</option>
                        <option value="tanzanian">Tanzanian</option>
                        <option value="thai">Thai</option>
                        <option value="togolese">Togolese</option>
                        <option value="tongan">Tongan</option>
                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                        <option value="tunisian">Tunisian</option>
                        <option value="turkish">Turkish</option>
                        <option value="tuvaluan">Tuvaluan</option>
                        <option value="ugandan">Ugandan</option>
                        <option value="ukrainian">Ukrainian</option>
                        <option value="uruguayan">Uruguayan</option>
                        <option value="uzbekistani">Uzbekistani</option>
                        <option value="venezuelan">Venezuelan</option>
                        <option value="vietnamese">Vietnamese</option>
                        <option value="welsh">Welsh</option>
                        <option value="yemenite">Yemenite</option>
                        <option value="zambian">Zambian</option>
                        <option value="zimbabwean">Zimbabwean</option>
                        </select>
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Birth country</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        <select onChange={setDrzavRod} value={drzavaRodenja} style={styles.inputWidth} >
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten (Dutch part)</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Birth place</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(mjestoRodenja.match('^[ ,A-Ža-ž]+$') === null || mjestoRodenja.length < 3)?
                        <input onChange={setMjestoRod} value={mjestoRodenja} style={styles.inputIncorrect}  />
                        :
                        <input onChange={setMjestoRod} value={mjestoRodenja} style={styles.inputWidth}  />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={styles.longColumnText}>Zip code of birth place</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(postbrRodenja.match('^[0-9]+$') === null || postbrRodenja.length > 5 || postbrRodenja.length < 4)? 
                        <input onChange={setPostbrRod} value={postbrRodenja} style={styles.inputIncorrect}  />
                        :
                        <input onChange={setPostbrRod} value={postbrRodenja} style={styles.inputWidth}  />
                    }
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Email</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))?
                        <input onChange={setMail} value={email} style={styles.inputIncorrect} />
                        :
                        <input onChange={setMail} value={email} style={styles.inputWidth} />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}><Label>*Example: </Label>Phone</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    <Label>+46 95 687 887</Label>
                    {(mobitel.match('^[+,/, ,0-9]+$') === null || mobitel.length < 13 || mobitel.length > 18)?
                        <input onChange={setMob} value={mobitel} style={styles.inputIncorrect} />
                        :
                        <input onChange={setMob} value={mobitel} style={styles.inputWidth} />
                    }
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.longColumnText}>Country of residence</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        <select onChange={setDrzavaStan} value={drzavaStanovanja} style={styles.inputWidth} >
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten (Dutch part)</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                    </Col>
                    <Col sm='2' xs='11' style={{ fontWeight: 'bold', marginLeft: '3%', marginBottom: '1%'  }} />
                    <Col sm='3' xs='11' style={styles.evenColumn} />
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Residence</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(mjestoStanovanja.match('^[ ,A-Ža-ž]+$') === null || mjestoStanovanja.length < 3)?
                        <input onChange={setMjestoStan} value={mjestoStanovanja} style={styles.inputIncorrect}  />
                        :
                        <input onChange={setMjestoStan} value={mjestoStanovanja} style={styles.inputWidth}  />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Zip code of residence </Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(postbrStanovanja.match('^[0-9]+$') === null || postbrStanovanja.length > 5 || postbrStanovanja.length < 4 )? 
                        <input onChange={setPostbrStan} value={postbrStanovanja} style={styles.inputIncorrect}  />
                        :
                        <input onChange={setPostbrStan} value={postbrStanovanja} style={styles.inputWidth}  />
                    }
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Street</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(ulicaStanovanja.match('^[ ,A-Ža-ž]+$') === null || ulicaStanovanja.length < 3)?
                        <input onChange={setUlicaStan} value={ulicaStanovanja} style={styles.inputIncorrect}  />
                        :
                        <input onChange={setUlicaStan} value={ulicaStanovanja} style={styles.inputWidth}  />
                    }
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>House number</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                    {(kucniBroj.match('^[A-Ža-ž,0-9]+$') === null || kucniBroj.length === 0 || kucniBroj.length > 10)? 
                        <input onChange={setKucniBr} value={kucniBroj} style={styles.inputIncorrect} />
                        :
                        <input onChange={setKucniBr} value={kucniBroj} style={styles.inputWidth} />
                    }
                    </Col>
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>College</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        { uciliste === "none" ?
                            <select onChange={setUcili} value={uciliste} style={styles.inputIncorrect} >
                                <option value="none">none</option>
                                <option value="one">Civil Engineering</option>
                                <option value="two">Department of Mathematics Faculty</option>
                                <option value="third">Faculty of Dental Medicine</option>
                            </select>
                            :
                            <select onChange={setUcili} value={uciliste} style={styles.inputWidth} >
                                <option value="none">none</option>
                                <option value="one">Civil Engineering</option>
                                <option value="two">Department of Mathematics Faculty</option>
                                <option value="third">Faculty of Dental Medicine</option>
                            </select>
                        }
                    </Col>
                    <Col sm='2' xs='11' style={{ fontWeight: 'bold', marginLeft: '3%', marginBottom: '1%'  }} />
                    <Col sm='3' xs='11' style={styles.evenColumn} />
                </Row>
                <Row style={{ marginBottom: '2%' }}>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Study Type</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        { vrstaStudija === "none" ?
                            <select onChange={setVrstaStud} value={vrstaStudija} style={styles.inputIncorrect} >
                                <option value="none">none</option>
                                <option value="one">undergraduate university study</option>
                                <option value="two">graduate university study</option>
                                <option value="third">postgraduate university study</option>
                            </select>
                            :
                            <select onChange={setVrstaStud} value={vrstaStudija} style={styles.inputWidth} >
                                <option value="none">none</option>
                                <option value="one">undergraduate university study</option>
                                <option value="two">graduate university study</option>
                                <option value="third">postgraduate university study</option>
                            </select>
                        }
                    </Col>
                    <Col sm='2' xs='11' style={styles.oddColumn}>Study</Col>
                    <Col sm='3' xs='11' style={styles.evenColumn}>
                        { studij === "none" ?
                            <select onChange={setStud} value={studij} style={styles.inputIncorrect} >
                                <option value="none">none</option>
                                <option value="one">Civil engineering</option>
                                <option value="two">Military engineering</option>
                            </select>
                            :
                            <select onChange={setStud} value={studij} style={styles.inputWidth} >
                                <option value="none">none</option>
                                <option value="one">Civil engineering</option>
                                <option value="two">Military engineering</option>
                            </select>
                        }
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <hr style={styles.HR} />
                    </Col>
                </Row>

                <Container xs='9' sm='9' style={styles.infoContainer}>
                    <Label style={{fontSize: 14}}><strong>Assistant</strong> - postgraduated student</Label>
                    <Label style={{fontSize: 14}}><strong>Freshman</strong> - a person who for the first enrolls for the first year of study in the academic year 2018/2019</Label>
                    <Label style={{fontSize: 14}}><strong>First year student</strong> - a person who in academic year 2017/2018 was enrolled for the first time in the first year of study</Label>
                    <Label style={{fontSize: 14}}><strong>Senior student</strong> - all older students who don't belong to the above mentioned categories</Label>
                </Container>


                <Container className='form-group'>
                    <Row >
                    <Label className='col-sm-4' style={styles.formLabel}>Request type</Label>
                        <Container className='col-sm-8'>
                            { vrstaMolbe === "none" ?
                                <select onChange={setVrstaMolb} value={vrstaMolbe} style={styles.inputIncorrect} >
                                    <option value="none">none</option>
                                    <option value="one">Freshman</option>
                                    <option value="two">Sophomore</option>
                                    <option value="third">Senior</option>
                                </select>
                                :
                                <select onChange={setVrstaMolb} value={vrstaMolbe} style={styles.inputWidth} >
                                <option value="none">none</option>
                                <option value="one">Freshman</option>
                                    <option value="two">Sophomore</option>
                                    <option value="third">Senior</option>
                                </select>
                            }
                        </Container>
                    </Row>
                </Container>

                <Container className='form-group'>
                    <Row >
                    <Label className='col-sm-4' style={styles.formLabel}>Accommodation category</Label>
                        <Container className='col-sm-8'>
                        { kategorijaSmjestaja === "none" ?
                                <select onChange={setKategorijaSmje} value={kategorijaSmjestaja} style={styles.inputIncorrect} >
                                    <option value="none">none</option>
                                    <option value="one">I category</option>
                                    <option value="two">II category</option>
                                    <option value="third">III category</option>
                                </select>
                                :
                                <select onChange={setKategorijaSmje} value={kategorijaSmjestaja} style={styles.inputWidth} >
                                    <option value="none">none</option>
                                    <option value="one">I category</option>
                                    <option value="two">II category</option>
                                    <option value="third">III category</option>
                                </select>
                            }
                        </Container>
                    </Row>
                </Container>

                <Container className='form-group'>
                    <Row >
                    <Label className='col-sm-4' style={styles.formLabel}>Accommodation category 2</Label>
                        <Container className='col-sm-8'>
                            { kategorijaSmjestaja2 === "none" ?
                                <select onChange={setKategorijaSmje2} value={kategorijaSmjestaja2} style={styles.inputIncorrect} >
                                    <option value="none">none</option>
                                    <option value="one">I category</option>
                                    <option value="two">II category</option>
                                    <option value="third">III category</option>
                                </select>
                                :
                                <select onChange={setKategorijaSmje2} value={kategorijaSmjestaja2} style={styles.inputWidth} >
                                    <option value="none">none</option>
                                    <option value="one">I category</option>
                                    <option value="two">II category</option>
                                    <option value="third">III category</option>
                                </select>
                            }
                        </Container>
                    </Row>
                </Container>

                <Container>
                    <Row >
                        <Col sm='4' xs='2' style={styles.formLabel}>
                            Student with disability
                        </Col>
                        <Col sm='5' xs='10' style={{textAlign: 'start'}}>
                            {/* <Container className='col-sm-10 col-xs-9'*/}
                                <input onChange={setInvalidn} checked={invalidnost} type='checkbox'/>
                            {/* </Container> */}
                        </Col>
                    </Row>
                </Container>


                <Row>
                    <Col>
                        <hr style={styles.HR} />
                    </Col>
                </Row>

                <Row style={{margin: '3%'}}>
                    <Col style={{ textAlign: 'start'}}>
                    {
                        save? 
                        <Button onClick={sendData} color='primary'>« Send »</Button>
                        :
                        edited? <Button onClick={postVrstaStud} color='primary'>Edit</Button> : <Button onClick={postVrstaStud} color='primary'>Save</Button>
                    }
                        {/* <Button onClick={postVrstaStud} color='primary'>« Nazad</Button> */}
                    </Col>

                    <Col style={{textAlign: 'end'}}>
                        <Button onClick={deleteVrstaStud} disabled={!canDelete} color='danger'>Delete</Button>
                        {/* <Button onClick={brojPrijave} color='primary'>Nastavi »</Button> */}
                    </Col>

                </Row>


            </Card>
        </Container>
        );


// function brojPrijave(){
//     setBrPrijave(brPrijave);
// }

function setJmbg(e){
    setJmbag(e.target.value);
}

function setSp(e){
    setSpol(e.target.value);
}

function setDatumRod(e){
    setDatumRodenja(e.target.value);
}

function setImeRod(e){
    setImeRoditelja(e.target.value);
}

function setDrzav(e){
    setDrzavljanstvo(e.target.value);
}

function setDrzavRod(e){
    setDrzavaRodenja(e.target.value);
}

function setMjestoRod(e){
    setMjestoRodenja(e.target.value);
}

function setPostbrRod(e){
    setPostbrRodenja(e.target.value);
}

function setMail(e){
    setEmail(e.target.value);
}

function setMob(e){
    setMobitel(e.target.value);
}

function setDrzavaStan(e){
    setDrzavaStanovanja(e.target.value);
}

function setMjestoStan(e){
    setMjestoStanovanja(e.target.value);
}

function setPostbrStan(e){
    setPostbrStanovanja(e.target.value);
}

function setUlicaStan(e){
    setUlicaStanovanja(e.target.value);
}

function setKucniBr(e){
    setKucniBroj(e.target.value);
}

function setUcili(e){
    setUciliste(e.target.value);
}

function setVrstaStud(e){
    setVrstaStudija(e.target.value);
}

function setStud(e){
    setStudij(e.target.value);
}

function setVrstaMolb(e){
    setVrstaMolbe(e.target.value);
}

function setKategorijaSmje(e){
    setKategorijaSmjestaja(e.target.value);
}

function setKategorijaSmje2(e){
    setKategorijaSmjestaja2(e.target.value);
}

function setInvalidn(e){
    setInvalidnost(e.target.checked);
}

function postVrstaStud(){
    // const insert = {
    //     vrstaStudijaNaziv: mjestoStanovanja,
    //     vrstaStudijaRazina: postbrStanovanja,
    //     vrstaStudijaOznaka: ulicaStanovanja,
    //     tipStudijskogPrograma: kucniBroj
    // }

    const insertStudent = {
        jmbag: jmbag,
        spol: spol,
        rodenjeDatum: datum,
        imeRoditelja: imeRoditelja,
        mjestoRodjenja: mjestoRodenja,
        pbrMjestaRodenja: postbrRodenja,
        telefon: mobitel,
        mail: email,
        mjestoStanovanja: mjestoStanovanja,
        pbrStanovanja: postbrStanovanja,
        ulica: ulicaStanovanja,
        kucniBroj: kucniBroj,
    }
    // setPostVrstaStudija(insert);
    setUpdateStudent(insertStudent);
    // setSave(true);
    validationChecker();
    setMolbaSt();
}

async function sendData() {
    // console.log(postVrstaStudija)
    console.log(updateStateStudent);
    let statusCode;
    if(edited){
        // statusCode = await updateVrstaStudija(postVrstaStudija);
        statusCode = await updateStudent(updateStateStudent);
    } 
    else
    {
        // statusCode = await sendVrstaStudija(postVrstaStudija);
        statusCode = await updateStudent(updateStateStudent);
    }
    console.log(statusCode);
    if(statusCode === 200){
        setMoblaState('Sent');
        swal({
            title: 'Success',
            text: 'You successfully send request!',
            buttons: {
                confirm: {
                    text: 'Okay'
                }
            }
        })
        // resetAllStates();
        setEdited(true);
        setSave(false);
        setCanDelete(true);
    } 
    else {
        swal({
            title: 'Error',
            text: 'Check your input data!',
            buttons: {
                confirm: {
                    text: 'Okay'
                }
            }
        })
    }
}

async function deleteVrstaStud(){
    // // let statusCode = await deleteVrstaStudija(ulicaStanovanja);
    // let statusCode = 200;
    // if(statusCode === 200){
    //     setMoblaState('Sent');
    //     swal({
    //         title: 'Success',
    //         text: 'You successfully deleted request!',
    //         buttons: {
    //             confirm: {
    //                 text: 'Okay'
    //             }
    //         }
    //     })
    //     setSave(false);
    //     setMoblaState('Started');
    //     setIsValid(false);
    
    //     setEdited(false);
    //     setCanDelete(false);
    // } 
    // else {
    //     swal({
    //         title: 'Error',
    //         text: 'Something went wrong!',
    //         buttons: {
    //             confirm: {
    //                 text: 'Okay'
    //             }
    //         }
    //     })
    // }



    // test
      
    setMoblaState('Sent');
    swal({
        title: 'Success',
        text: 'You successfully deleted request!',
        buttons: {
            confirm: {
                text: 'Okay'
            }
        }
    })
    setSave(false);
    setMoblaState('Started');
    setIsValid(false);

    setEdited(false);
    setCanDelete(false);
    

}

function setMolbaSt(){
    setMoblaState('Saved');
}


function validationChecker(){
    if (!(jmbag.match('^[0-9]+$') === null || jmbag.length !== 13)
        && !(datum.length < 1) && !(imeRoditelja.match('^[A-Ža-ž]+$') === null || imeRoditelja.length < 3)
        && !(mjestoRodenja.match('^[ ,A-Ža-ž]+$') === null || mjestoRodenja.length < 3)
        && !(postbrRodenja.match('^[0-9]+$') === null || postbrRodenja.length > 5 || postbrRodenja.length < 5)
        && !(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        && !(mobitel.match('^[+,/, ,0-9]+$') === null || mobitel.length < 10 || mobitel.length > 18)
        && !(mjestoStanovanja.match('^[ ,A-Ža-ž]+$') === null || mjestoStanovanja.length < 3)
        && !(postbrStanovanja.match('^[0-9]+$') === null || postbrStanovanja.length > 5 || postbrStanovanja.length < 4 )
        && !(ulicaStanovanja.match('^[ ,A-Ža-ž]+$') === null || ulicaStanovanja.length < 3)
        && !(kucniBroj.match('^[A-Ža-ž,0-9]+$') === null || kucniBroj.length === 0 || kucniBroj.length > 10)
        && !(vrstaMolbe === "none" )
        && !(kategorijaSmjestaja === "none" )
        && !(kategorijaSmjestaja2 === "none" )
        && !(uciliste === "none" )
        && !(vrstaStudija === "none" )
        && !(studij === "none" )
    )
    {
        setIsValid(true);
        setSave(true);
    }
    else 
    {
        setIsValid(false);
        swal({
            title: 'Incorrect form',
            text: 'All data must be valid, please check it!',
            buttons: {
                confirm: {
                    text: 'Affirmative'
                }
            }
        })

    }
}


// function resetAllStates() {
//     setJmbag('');
//     setSpol('Muško');
//     setImeRoditelja('');
//     // setDatumRod(null);
//     setDrzavljanstvo('Afghanistan');
//     setDrzavaRodenja('Afghanistan');
//     setMjestoRodenja('');
//     setPostbrRodenja('');
//     setEmail('');
//     setMobitel('');
//     setDrzavaStanovanja('Afghanistan');
//     setMjestoStanovanja('');
//     setPostbrStanovanja('');
//     setUlicaStanovanja('');
//     setKucniBroj('');
//     setUciliste('Prvo');
//     setVrstaStudija('Prvo');
//     setStudij('Prvo');

//     setVrstaMolbe('Prvo');
//     setKategorijaSmjestaja('Prvo');
//     setKategorijaSmjestaja2('Prvo');
//     setInvalidnost(false);
// }




} // end
// }

export default Molba;

