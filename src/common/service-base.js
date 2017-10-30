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
        });
    }
}

function getFullPath(path) {
    return `${baseUrl}/${path}`;
}