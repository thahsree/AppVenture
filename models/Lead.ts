import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectType: { type: String },
  budget: { type: String },
  timeline: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Avoid re-compiling the model in Next.js development
const Lead = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
