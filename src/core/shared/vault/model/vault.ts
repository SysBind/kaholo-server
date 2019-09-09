import mongoose, { Schema, Document } from 'mongoose';
import { ApiModelProperty } from '@nestjs/swagger';

export interface IVault extends Document {
  name: string;
}

export const VaultSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IVault>('Person', VaultSchema);
