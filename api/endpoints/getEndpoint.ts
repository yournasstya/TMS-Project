import { get } from "../api";

export async function getAllPosts(): Promise<any> {
    return await get(`/posts`);
}

export async function getPostByID(postId: number): Promise<any> {
    return await get(`/posts/${postId}`);
}

export async function getAllPostByUserID(userId: number): Promise<any> {
    return await get(`/posts?userId=${userId}`);
}

export async function getAllCommentsbyID(postId: number): Promise<any> {
    return await get(`/posts/${postId}/comments`);
}

export async function getAllAlbums(): Promise<any> {
    return await get(`/albums`);
}

export async function getAlbumByID(albumId: number): Promise<any> {
    return await get(`/albums/${albumId}`);
}

export async function getAllAlbumByUserID(userId: number): Promise<any> {
    return await get(`/albums?userId=${userId}`);
}

export async function getAllPhotosByAlbumID(albumId: number): Promise<any> {
    return await get(`/photos?albumId=${albumId}`);
}

export async function getPhotoByID(photoId: number): Promise<any> {
    return await get(`/photos/${photoId}`);
}