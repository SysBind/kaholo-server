import mongoose, { Schema, Document } from 'mongoose';
import { MapInterface } from '../../maps/model/map.model';

export interface ProjectInterface {
  name: string;
  description?: string;
  archived?: boolean;
  maps: [string | MapInterface];
}

export interface ProjectDocumentInterface extends ProjectInterface, Document {
}

export const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  archived: { type: Boolean, default: false },
  maps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Map' }],
}, { timestamps: true });

projectSchema.statics.autocompleteKey = 'name';
projectSchema.statics.autocompleteValueField = '_id';

export const project = mongoose.model<ProjectDocumentInterface>('Project', projectSchema, 'projects');
