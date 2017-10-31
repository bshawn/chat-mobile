const baseUrl = 'https://bshawn.cfapps.io';
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export default class ServiceBase {
    static get(path) {
        const url = getFullPath(path);
        return fetch(url, {
            method: 'GET',
            headers: defaultHeaders
        }).then(handleErrorStatusCodes);
    }

    static post(path, data) {
        // console.log(`POST: ${path}`, data);
        const url = getFullPath(path);
        return fetch(url, {
            method: 'POST',
            headers: defaultHeaders,
            body: JSON.stringify(data)
        }).then(handleErrorStatusCodes);
    }

    static put(path, data) {
        // console.log(`PUT: ${path}`, data);
        const url = getFullPath(path);
        return fetch(url, {
            method: 'PUT',
            headers: defaultHeaders,
            body: JSON.stringify(data)
        }).then(handleErrorStatusCodes);
    }
}

function getFullPath(path) {
    return `${baseUrl}/${path}`;
}

function handleErrorStatusCodes(response) {
    if (!response.ok) {
        return response.text()
            .then(text => Promise.reject(text));
    }
    return response;
}