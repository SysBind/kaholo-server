import mongoose, { Schema, Document } from 'mongoose';

export interface IAgent {
  name?: string;
  url: string;
  publicUrl: string;
  key: string;
  sshKey: string;
  attributes: [any];
  isDeleted: boolean;
}

export interface IAgentDocument extends IAgent, Document {
}

const agentSchema = new Schema({
  name: String,
  url: {type: String, required: true},
  publicUrl: {type: String, required: true},
  key: {type: String, required: true},
  sshKey: String,
  attributes: [],
  isDeleted: Boolean,
});

agentSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.key;
  },
});

export const Agent = mongoose.model<IAgentDocument>('Agent', agentSchema, 'agents');
