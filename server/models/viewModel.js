import { Schema, model } from 'mongoose';

const viewSchema = Schema({
  _id: Schema.Types.ObjectId,
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default model('View', viewSchema);
