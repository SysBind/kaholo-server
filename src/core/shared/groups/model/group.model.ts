import mongoose, { Schema, Document } from 'mongoose';
import { filterParamSchema, FilterParamInterface } from './filter-param.model';
import { AgentInterface } from '../../agents/model/agents.model';

export interface GroupInterface {
  name: string;
  agents: [string | AgentInterface];
  filters: [FilterParamInterface];
}

export interface GroupDocumentInterface extends GroupInterface, Document {}

const groupSchema = new Schema({
  name: {type: String, required: true},
  agents: [{type: Schema.Types.ObjectId, ref: 'Agent'}],
  filters: [filterParamSchema],
});

export const group = mongoose.model<GroupDocumentInterface>('Group', groupSchema, 'groups');
