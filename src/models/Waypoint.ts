import { model, Schema } from 'mongoose';

const WaypointSchema = new Schema({
  name: { type: String, required: true },
  coord: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
  },
});

export const WaypointModel = model('Waypoint', WaypointSchema);
