import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipientName: String,
  recipientPhone: String,
  recipientAddress: String,
  origin: String,
  destination: String,
  status: {
    type: String,
    enum: ['pending', 'in-transit', 'delivered', 'cancelled'],
    default: 'pending',
  },
  weight: Number,
  shipmentDate: Date,
  deliveryDate: Date,
  notes: String,
}, { timestamps: true });

export const Shipment = mongoose.models.Shipment || mongoose.model('Shipment', shipmentSchema);
