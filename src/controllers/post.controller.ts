import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from '../service/post.service';
import { Request, Response } from 'express';
import { omit, get } from 'lodash';
import log from '../logger';

export async function createPostHandler(req: Request, res: Response) {
  try {
    const Post = await createPost(req.body);
    return res.send(omit(Post.toJSON(), 'password'));
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getPostHandler(req: Request, res: Response) {
  try {
    const Post = await getPost(req.body);
    for (let i = 0; i < Post.length; i++) {
      if (Post[i].isAnonymous) {
        Post[i].user = 'Anonymous';
      }
    }
    return res.send(Post);
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getPostByIdHandler(req: Request, res: Response) {
  try {
    console.log(req.params.id);
    const Post = await getPostById(req.params.id);
    if(!Post) {
      return res.sendStatus(404);
    }
    if (Post.isAnonymous) {
      Post.user = 'Anonymous';
    }
    return res.send(Post);
  } catch (error: any) {

    log.error(error);
    res.status(409).send(error.message);
  }
}



export async function deletePostHandler(req: Request, res: Response) {
  try {
    const Post = await deletePost(req.params.id);
    return res.send(Post);
  } catch (error: any) {
    log.error(error);
  }
}

export async function updatePostHandler(req: Request, res: Response) {
  try {
    const Post = await updatePost(req.params.id, req.body);
    return res.send("Post Updated");
  } catch (error: any) {
    log.error(error);
  }
}
