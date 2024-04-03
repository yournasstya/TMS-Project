import axios, { AxiosResponse } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export async function get(path: string, query?: object): Promise<AxiosResponse> {
    const url = `${baseURL}${path}`;

    try {
        const response = await axios.get(url, { params: query });
        return response;
    } catch (error: any) {
        return error.response;
    }
}

export async function post(path: string, body: object) {
    const url = `${baseURL}${path}`;
    const response = await axios.post(url, body);
    return response;
}

export async function put(path: string, body: object): Promise<AxiosResponse> {
    const url = `${baseURL}${path}`;
    const response = await axios.put(url, body);
    return response;
}

export async function patch(path: string, body: object): Promise<AxiosResponse> {
    const url = `${baseURL}${path}`;
    const response = await axios.patch(url, body);
    return response;
}

export async function deleteData(path: string): Promise<AxiosResponse> {
    const url = `${baseURL}${path}`;
    const response = await axios.delete(url);
    return response;
}