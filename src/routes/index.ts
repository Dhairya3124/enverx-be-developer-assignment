import { Express } from 'express';
import UserRoutes from './user.routes';
import PostRoutes from './post.routes';
export default function (app: Express) {
  // Added Registration Routes and Login Routes
  app.use(UserRoutes);

  // Adding Posts Routes - Create Posts
  app.use(PostRoutes);
}
