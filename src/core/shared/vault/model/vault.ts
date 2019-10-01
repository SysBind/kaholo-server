import mongoose, { Schema, Document } from 'mongoose';

export interface IVault {
  name: string;
}
export interface IVaultDocument extends Document, IVault {
  name: string;
}

export const VaultSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IVaultDocument>('Person', VaultSchema);
