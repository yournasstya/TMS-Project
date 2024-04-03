import { get, post, put, deleteData } from "../api/api"
import { IAlbumModel } from "../data/models/albumModel";
import { dataNewAlbum, expectedAlbum1, expectedAlbumsForUser1 } from "../data/testData/expectedAlbumData";
import { expectedPhoto1 } from "../data/testData/expectedPhotoData";
import { dataNewPost, dataUpdatePost, expectedPost1 } from "../data/testData/expectedPostData";

describe('API Tests - Posts', () => {

    test('User can get all posts', async () => {
        const response = await get("/posts");

        expect(response.status).toBe(200);
        expect(response.data.length).toEqual(100);

    });

    test('User can get a post by Id', async () => {
        const postId: number = 1;
        const response = await get(`/posts/${postId}`);

        expect(response.status).toBe(200);
        expect(response.data).toEqual(expect.objectContaining(expectedPost1));
    });

    test('User should get a 404 error when trying to fetch a post with a non-existing Id', async () => {
        const nonExistingPostId = 9999;
        const response = await get(`/posts/${nonExistingPostId}`);
      
        expect(response.status).toBe(404);
    });

    // Пользователь может получить все посты для конкретного пользователя по userId

    test('User should receive an empty array when trying to get posts for a non-existent user', async () => {
        const userId = 999; 
        const response = await get(`/posts?userId=${userId}`);

        expect(response.status).toBe(200); 
        expect(response.data).toEqual([]); 
    });


    test('User can get all comments for a post by its Id', async () => {
        const postId = 1; 
        const response = await get(`/posts/${postId}/comments`);

        expect(response.status).toBe(200); 
        expect(Array.isArray(response.data)).toBe(true); 
    });


    test('User will receive an empty array when trying to get comments for a non-existent post', async () => {
        const postId: number = 999; 
        const response = await get(`/posts/${postId}/comments`);

        expect(response.status).toBe(200); 
        expect(response.data).toEqual([]);
    });

    test('User should be able to create a new post', async () => {
        const postData = await post(`/posts`, dataNewPost)

        expect(postData.status).toBe(201);
        expect(postData.data.userId).toBe(1); 
        expect(postData.data.title).toBe('Test title');
    });

    test('User should be able to update the title of an existing post', async () => {
        const postId: number = 1;
        const updatedTitle = await put(`/posts/${postId}`, dataUpdatePost);

        expect(updatedTitle.status).toBe(200); 
        expect(updatedTitle.data.title).toBe('Updated title'); 
    });

    test('User should be able to delete a post by Id', async () => {
        const postId = 1;
        const response = await deleteData(`/posts/${postId}`);

        expect(response.status).toBe(200); 
    });
});


describe('API Tests - Albums', () => {

    test('User can get all albums', async () => {
        const response = await get(`/albums`);
        expect(response.status).toBe(200);
        expect(response.data).toHaveLength(100);
    });

    test('User can get an album by Id', async () => {
        const albumId = 1;
        const response = await get(`/albums/${albumId}`);
        const expectedAlbum: IAlbumModel = expectedAlbum1;

        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectedAlbum)
    });

    test('User can get all albums of a specific user by userId', async () => {
        const userId = 1;
        const response = await get(`/albums?userId=${userId}`);
        const expectedAlbum: IAlbumModel[] = expectedAlbumsForUser1;

        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectedAlbum)
    });

    test('User can add a new album', async () => {
        const response = await post(`/albums`, dataNewAlbum);

        expect(response.status).toBe(201);
        expect(response.data.userId).toBe(dataNewAlbum.userId);
        expect(response.data.title).toBe(dataNewAlbum.title);
    });
});


describe('API Tests - Photos', () => {

    test('User can get all photos in an album by album Id', async () => {
        const albumId = 1; // Предположим albumId = 1
        const response = await get(`/photos?albumId=${albumId}`);

        expect(response.status).toBe(200);
        for (const photo of response.data) {
            expect(photo.albumId).toBe(albumId);
        }
    });

    test('User can get a specific photo by Id', async () => {
        const photoId = 1; // Предположим photoId = 1
        const response = await get(`/photos/${photoId}`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(expectedPhoto1.id);
    });

    test.skip('User can upload a new photo', async () => {});
    test.skip('User can upload a new photo without specifying albumId', async () => {});

});
