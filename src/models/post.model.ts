import { UserDocument } from './user.model';
import * as mongoose from 'mongoose';

export interface PostDocument extends mongoose.Document {
  Post: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: UserDocument['_id'];
}

const PostSchema = new mongoose.Schema(
  {
    Post: {
      type: String,
      required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isAnonymous: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>('Post', PostSchema);
export default Post;
