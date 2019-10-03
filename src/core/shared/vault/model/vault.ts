import mongoose, { Schema, Document } from 'mongoose';

export interface VaultInterface {
  name: string;
}
export interface VaultDocumentInterface extends Document, VaultInterface {
  name: string;
}

export const vaultSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<VaultDocumentInterface>('Person', vaultSchema);
