import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    const { name, email, projectType, budget, timeline } = data;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
    }

    const newLead = await Lead.create({
      name,
      email,
      projectType,
      budget,
      timeline,
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error: any) {
    console.error('Error saving lead to MongoDB:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
