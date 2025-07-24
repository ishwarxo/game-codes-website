import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  gameId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  category: { type: String },
  totalPlayers: { type: String },
  rating: { type: Number },
  popularity: { type: String },
  lastUpdated: { type: Date },
  isFeatured: { type: Boolean, default: false },
  monthlyPlayers: { type: String },
});

export const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);