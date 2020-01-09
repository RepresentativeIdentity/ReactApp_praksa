import swal from 'sweetalert';
const baseUrl = "http://localhost:53636/api/";

export async function getStudent() {
    let token = await localStorage.getItem('token');
    let protocolID = await localStorage.getItem('id');
    try {
        let response = await fetch(baseUrl + 'student/' + protocolID, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        let res = await response.json();
        return res[0];
    }
    catch (error) {
        console.log("Greska student");

        swal({
            title: 'Error',
            text: 'Please login first to access your data!',
            buttons: {
                confirm: {
                    text: 'Okay'
                }
            }
        })
    }
}




export async function getToken (email: string, password: string) {
    try {

        let response = await fetch(baseUrl +  'auth/tokenStudentAccess/' + email + '/' + password, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })

        let res = await response.json();
        await localStorage.setItem('token', res.token);
        await localStorage.setItem('id', res.protocolID);
        await localStorage.setItem('login', 'true');
        return res;
    }
    catch (error) {
        console.log("Greska")
        swal({
            title: 'Error',
            text: 'Please check your inputs!',
            buttons: {
                confirm: {
                    text: 'Okay'
                }
            }
        })
    }
}



export async function getVrstaStudija() {
        let token = await localStorage.getItem('token');
        try {
            let response = await fetch(baseUrl +  'vrstaStudija/9', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })
            let res = await response.json();
            return res[0];
        }
        catch (error) {
            console.log("Greska student");

            swal({
                title: 'Error',
                text: 'Please login first to access your data!',
                buttons: {
                    confirm: {
                        text: 'Okay'
                    }
                }
            })
        }
}



export async function sendVrstaStudija(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }

    const request = new Request(baseUrl +  'vrstaStudija/', options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}


export async function updateVrstaStudija(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    }

    const request = new Request(baseUrl + 'vrstaStudija/', options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}


export async function deleteVrstaStudija(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'DELETE',
        headers
    }

    const request = new Request(baseUrl + 'vrstaStudija/' + data, options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}






export async function sendRequest(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }

    const request = new Request(baseUrl + 'Molba/', options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}


export async function updateRequest(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    }

    const request = new Request(baseUrl + 'Molba/', options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}


export async function deleteRequest(data) {
    let token = await localStorage.getItem('token');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'DELETE',
        headers
    }

    const request = new Request(baseUrl + 'Molba/' + data, options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}


// Student update
export async function updateStudent(data) {
    let token = await localStorage.getItem('token');
    let protocolID = await localStorage.getItem('id');

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    }

    const request = new Request(baseUrl + 'student/' + protocolID, options);
    const response = await fetch(request);
    const status = await response.status;
    return status;
}
