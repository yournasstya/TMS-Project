import { put } from "../api";

export async function updatedTitlePost(postId: number, body: object): Promise<any> {
    return await put(`/posts/${postId}`, body);
}