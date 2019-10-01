import mongoose, { Schema, Document } from 'mongoose';
import { IMap } from '../../maps/model/map.model';

export interface IProject {
  name: string;
  description?: string;
  archived?: boolean;
  maps: [string | IMap];
}

export interface IProjectDocument extends IProject, Document {
}

export const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  archived: { type: Boolean, default: false },
  maps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Map' }],
}, { timestamps: true });

ProjectSchema.statics.autocompleteKey = 'name';
ProjectSchema.statics.autocompleteValueField = '_id';

export const ProjectModel = mongoose.model<IProjectDocument>('Project', ProjectSchema, 'projects');
