import { model, models, Schema, Document } from "mongoose";

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureURL: { type: String, required: true },

  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationURL: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export interface IImage extends Document {
  // 'Document' is a mongoose type (Ex of extended properties _id)
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string;

  width?: number;
  height?: number;
  config?: object;
  transformationURL?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const Image = models?.Image || model("Image", ImageSchema);
export default Image;
