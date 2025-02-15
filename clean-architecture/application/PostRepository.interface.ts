import { PostEntity } from "../domain/post.entity"
import { CreatePostDto } from "./CreatePost.dto"
import { CreatePostResultDto } from "./CreatePostResult.dto"

export interface IPostRepository {
   create(post: CreatePostDto): CreatePostResultDto
}
