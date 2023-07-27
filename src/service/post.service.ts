import { FilterQuery } from 'mongoose';
import Post, { PostDocument } from '../models/post.model';

export async function createPost(input: PostDocument) {
  try {
    return await Post.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getPost(query: FilterQuery<PostDocument>) {
  // limit and offset are optional
  const limit = query.limit && parseInt(query.limit);
  const offset = query.offset && parseInt(query.offset);
  const asc = query.asc && query.asc;
  if(asc){
    return Post.find().sort({createdAt: 1}).skip(offset).limit(limit).lean();
  }
  return Post.find().skip(offset).limit(limit).lean();
}

export async function deletePost(id: string) {
  // Delete Post by Post id
  return Post.findByIdAndDelete(id).lean();
}

export async function getPostById(id: string) {
  // Get Post by Post id
  return Post.findById(id).lean();
}

export async function updatePost(id: string, input: PostDocument){
  // Update Post by Post id
  // return Post.findByIdAndUpdate(id, input).lean();
  try{
    return await Post.findByIdAndUpdate(id, input).lean();
  }
  catch(error: any){
    throw new Error(error);
  }

}