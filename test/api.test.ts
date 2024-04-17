import { deletePostById } from "../api/endpoints/deleteEndpoint";
import { createAlbum, createPost } from "../api/endpoints/postEndpoint";
import { updatedTitlePost } from "../api/endpoints/putEndpoint";
import { IAlbumModel } from "../data/models/albumModel";
import { dataNewAlbum, expectedAlbum1, expectedAlbumsForUser1 } from "../data/testData/expectedAlbumData";
import { expectedPhoto1 } from "../data/testData/expectedPhotoData";
import { dataNewPost, dataUpdatePost, expectedPost1 } from "../data/testData/expectedPostData";
import { nonExistingPostId, postId, nonExistingUserId, albumId, userId, photoId } from "../utils/testDataUtils";
import { 
    getAlbumByID, 
    getAllAlbumByUserID, 
    getAllAlbums, 
    getAllCommentsbyID, 
    getAllPhotosByAlbumID, 
    getAllPostByUserID, 
    getAllPosts, 
    getPhotoByID, 
    getPostByID 
} from "../api/endpoints/getEndpoint";


describe('API Tests - Posts', () => {
    test('User can get all posts', async () => {
        const recievedAllPosts = await getAllPosts();

        expect(recievedAllPosts.status).toBe(200);
        expect(recievedAllPosts.data.length).toEqual(100);

    });

    test('User can get a post by Id', async () => {
        const recievedPost = await getPostByID(postId);

        expect(recievedPost.status).toBe(200);
        expect(recievedPost.data).toEqual(expect.objectContaining(expectedPost1));
    });

    test('User should get a 404 error when trying to get a post with a non-existing Id', async () => {
        const receivedStatusCode = await getPostByID(nonExistingPostId);
        expect(receivedStatusCode.status).toBe(404);
    });

    test('User should receive an empty array when trying to get posts for a non-existent user', async () => {
        const recievedAllPostsById = await getAllPostByUserID(nonExistingUserId);

        expect(recievedAllPostsById.status).toBe(200); 
        expect(recievedAllPostsById.data).toEqual([]); 
    });

    test('User can get all comments on a post by its Id', async () => {
        const receivedAllCommentsById = await getAllCommentsbyID(postId);

        expect(receivedAllCommentsById.status).toBe(200); 
        expect(Array.isArray(receivedAllCommentsById.data)).toBe(true); 
    });

    test('User will get an empty array when trying to get comments for a non-existent post', async () => {
        const receivedEmptyArray = await getAllCommentsbyID(nonExistingPostId);

        expect(receivedEmptyArray.status).toBe(200); 
        expect(receivedEmptyArray.data).toEqual([]);
    });

    test('User can create a new post', async () => {
        const newPost = await createPost(dataNewPost)

        expect(newPost.status).toBe(201);
        expect(newPost.data.userId).toBe(1); 
        expect(newPost.data.title).toBe('Title');
    });

    test('User can update the title of an existing post', async () => {
        const updatedTitle = await updatedTitlePost(postId, dataUpdatePost);

        expect(updatedTitle.status).toBe(200); 
        expect(updatedTitle.data.title).toBe('Updated title'); 
    });

    test('User can delete a post by Id', async () => {
        const response = await deletePostById(postId);
        expect(response.status).toBe(200); 
    });
});


describe('API Tests - Albums', () => {
    test('User can get all albums', async () => {
        const response = await getAllAlbums();

        expect(response.status).toBe(200);
        expect(response.data).toHaveLength(100);
    });

    test('User can get an album by Id', async () => {
        const expectedAlbumById = await getAlbumByID(albumId);
        const expectedAlbum: IAlbumModel = expectedAlbum1;

        expect(expectedAlbumById.status).toBe(200);
        expect(expectedAlbumById.data).toEqual(expectedAlbum)
    });

    test('User can get all albums of a specific user by userId', async () => {
        const expectedAlbumByUserId = await getAllAlbumByUserID(userId);
        const expectedAlbum: IAlbumModel[] = expectedAlbumsForUser1;

        expect(expectedAlbumByUserId.status).toBe(200);
        expect(expectedAlbumByUserId.data).toEqual(expectedAlbum)
    });

    test('User can add a new album', async () => {
        const newAlbum = await createAlbum(dataNewAlbum);

        expect(newAlbum.status).toBe(201);
        expect(newAlbum.data.userId).toBe(dataNewAlbum.userId);
        expect(newAlbum.data.title).toBe(dataNewAlbum.title);
    });
});


describe('API Tests - Photos', () => {
    test('User can get all photos in an album by album Id', async () => {
        const receivedAllPhotosById = await getAllPhotosByAlbumID(albumId);
        expect(receivedAllPhotosById.status).toBe(200);

        for (const photo of receivedAllPhotosById.data) {
            expect(photo.albumId).toBe(albumId);
        }
    });

    test('User can get a specific photo by Id', async () => {
        const recievedPhotoById = await getPhotoByID(photoId);

        expect(recievedPhotoById.status).toBe(200);
        expect(recievedPhotoById.data.id).toBe(expectedPhoto1.id);
    });
});