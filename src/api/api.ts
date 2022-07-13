import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const userAPI = {
    getUsers() {
        return instance.get(`users`)
    },
    getUser(id: number) {
        return instance.get(`users/${id}`)
    },
    getPosts(userId: number, page = 1, limit = 10) {
        return instance.get(`posts`, {
            params: {
                userId: userId,
                _limit: limit,
                _page: page
            }
        })
    },
    getPost(postId: number) {
        return instance.get(`posts/${postId}`)
    },
    getComments(postId: number) {
        return instance.get(`posts/${postId}/comments`)
    }
}
export const todoAPI = {
    getTodos(userId: number, page = 1, limit = 10) {
        return instance.get(`users/${userId}/todos`, {
            params: {
                _page: page,
                _limit: limit
            }
        })
    }
}

export const albumAPI = {
    getAlbums(userId: number, page = 1, limit = 5) {
        return instance.get(`/users/${userId}/albums`, {
            params: {
                _limit: limit,
                _page: page,
            }
        })
    },
    getAlbum(id: number) {
        return instance.get(`albums/${id}`)
    }
}

export const photoAPI = {
    getPhotos(albumId: number, page = 1, limit = 10) {
        return instance.get(`album/${albumId}/photos`, {
            params: {
                _limit: limit,
                _page: page
            }
        })
    },
    getPhoto(photoId: number) {
        return instance.get(`photo/${photoId}`)
    }
}

