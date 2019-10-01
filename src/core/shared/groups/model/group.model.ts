import mongoose, { Schema, Document } from 'mongoose';
import { filterParamSchema, IFilterParam } from './filter-param.model';
import { IAgent } from '../../agents/model/agents.model';

export interface IGroup {
  name: string;
  agents: [string | IAgent];
  filters: [IFilterParam];
}

export interface IGroupDocument extends IGroup, Document {}

const groupSchema = new Schema({
  name: {type: String, required: true},
  agents: [{type: Schema.Types.ObjectId, ref: 'Agent'}],
  filters: [filterParamSchema],
});

export const Group = mongoose.model<IGroupDocument>('Group', groupSchema, 'groups');
