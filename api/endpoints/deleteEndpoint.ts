import { deleteData } from "../api";

export async function deletePostById(postId: number): Promise<any> {
    return await deleteData(`/posts/${postId}`);
}