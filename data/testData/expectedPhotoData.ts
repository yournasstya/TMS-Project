import { IPhotoModel } from "../models/photoModel";

export const expectedPhoto1: IPhotoModel = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
}

export const dataNewPhoto: IPhotoModel = {
    albumId: 1,
    id: 1,
    title: "Test title",
    url: "Test url",
    thumbnailUrl: "Test thumbnailUrl"
}

export const wrongDataNewPhoto: IPhotoModel = {
    albumId: 9999,
    id: 1,
    title: "Test title",
    url: "Test url",
    thumbnailUrl: "Test thumbnailUrl"
}