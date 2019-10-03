import mongoose, { Schema, Document } from 'mongoose';
import { AgentInterface } from '../../agents/model/agents.model';
import { GroupInterface } from '../../groups/model/group.model';

export interface MapInterface {
  name: string;
  description?: string;
  archived?: boolean;
  agents: [string | AgentInterface];
  groups: [string | GroupInterface];
  queue?: number;
  processResponse?: string;
  apiResponseCodeReference?: string;
}

export interface MapDocumentInterface extends Document, MapInterface {
  name: string;
  description?: string;
  archived?: boolean;
  agents: [string | AgentInterface];
  groups: [string | GroupInterface];
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

export const map = mongoose.model<MapDocumentInterface>('Map', mapSchema, 'maps');
