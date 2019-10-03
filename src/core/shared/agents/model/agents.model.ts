import mongoose, { Schema, Document } from 'mongoose';

export interface AgentInterface {
  name?: string;
  url: string;
  publicUrl: string;
  key: string;
  sshKey: string;
  attributes: [];
  isDeleted: boolean;
}

export interface AgentDocumentInterface extends AgentInterface, Document {
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

export const agent = mongoose.model<AgentDocumentInterface>('Agent', agentSchema, 'agents');
