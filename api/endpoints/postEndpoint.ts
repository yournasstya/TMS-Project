import { post } from "../api";

export async function createPost(body: object): Promise<any> {
    return await post(`/posts`, body);
}

export async function createAlbum(body: object): Promise<any> {
    return await post(`/albums`, body);
}