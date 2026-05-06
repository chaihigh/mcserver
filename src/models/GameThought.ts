import { model, Schema } from 'mongoose';

const GameThoughtSchema = new Schema({
  name: { type: String, required :true },
  priority: { type: Number, required :true },
  description: { type: String, required :true },
});

export const GameThoughtModel = model('GameThought', GameThoughtSchema);
