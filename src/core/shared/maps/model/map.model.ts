import mongoose, { Schema, Document } from 'mongoose';
import { IAgent } from '../../agents/model/agents.model';
import { IGroup } from '../../groups/model/group.model';

export interface IMap {
  name: string;
  description?: string;
  archived?: boolean;
  agents: [string | IAgent];
  groups: [string | IGroup];
  queue?: number;
  processResponse?: string;
  apiResponseCodeReference?: string;
}

export interface IMapDocument extends Document, IMap {
  name: string;
  description?: string;
  archived?: boolean;
  agents: [string | IAgent];
  groups: [string | IGroup];
  queue?: number;
  processResponse?: string;
  apiResponseCodeReference?: string;
}

const mapSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, default: ''},
  archived: {type: Boolean, default: false, index: true},
  agents: [{type: Schema.Types.ObjectId, ref: 'Agent'}],
  groups: [{type: Schema.Types.ObjectId, ref: 'Group'}],
  queue: Number,
  processResponse: {type: String, default: null},
  apiResponseCodeReference: {type: String},
}, {timestamps: true});

mapSchema.statics.autocompleteKey = 'name';
mapSchema.statics.autocompleteValueField = '_id';

export const Map = mongoose.model<IMapDocument>('Map', mapSchema, 'maps');
