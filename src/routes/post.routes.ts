import { Router } from 'express';
import { createPostHandler, getPostHandler, deletePostHandler, getPostByIdHandler, updatePostHandler } from '../controllers/post.controller';
import { checkauth } from '../middleware/checkauth';
import requiresUser from '../middleware/requiresUser';
import validateRequest from '../middleware/validateRequest';
import { createPostschema, getPostschema, deletePostschema } from '../schema/post.schema';
import { update } from 'lodash';


const PostRoutes = Router();

  PostRoutes.post(
    '/api/post',
    [checkauth, requiresUser, validateRequest(createPostschema)],
    createPostHandler
  );
  // Adding Post Routes - Get all Post
  PostRoutes.get(
    '/api/post',
    [checkauth, validateRequest(getPostschema)],
    getPostHandler
  );
  //Adding Post Routes - Get one Post
  PostRoutes.get(
    '/api/post/:id',
    [checkauth, validateRequest(getPostschema)],
    getPostByIdHandler
  );
  // Updating the Post - Update Post
  PostRoutes.put(
    '/api/post/:id',
    [checkauth, validateRequest(createPostschema)],
    updatePostHandler
  );
  // Deleting the Post - Delete Post
  PostRoutes.delete(
    '/api/post/:id',
    [checkauth, validateRequest(deletePostschema)],
    deletePostHandler
  );

export default PostRoutes;