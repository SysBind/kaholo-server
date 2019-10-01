import { Schema } from 'mongoose';

const COMPARISON = ['gte', 'gt', 'contains', 'lte', 'lt', 'equal'];

export interface IFilterParam {
  field?: string;
  value?: string;
  filterType?: string;
}

export const filterParamSchema = new Schema({
  field: String,
  value: String,
  filterType: { type: String, enum: COMPARISON },
}, { _id: false });
