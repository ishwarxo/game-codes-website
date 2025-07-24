import mongoose from 'mongoose';

const codeSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  code: { type: String, required: true },
  reward: { type: String },
  status: { type: String, enum: ['active', 'expired'], required: true },
  addedDate: { type: Date, required: true },
});

export const Code = mongoose.models.Code || mongoose.model('Code', codeSchema);