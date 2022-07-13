import * as UsersThunks from './usersThunks'
import * as TodosThunks from './todosThunks'
import * as PostsThunks from './postsThunks'
import * as CommentsThunks from './commentsThunks'

export default {
    ...UsersThunks,
    ...PostsThunks,
    ...TodosThunks,
    ...CommentsThunks,
}