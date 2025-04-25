import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/db/mongoose';

export async function GET() {
  try {
    const mongoose = await dbConnect();
    return NextResponse.json({ 
      status: 'success', 
      message: 'Conexión a MongoDB establecida correctamente',
      version: mongoose.version,
      env: process.env.NODE_ENV
    });
  } catch (error) {
    console.error('Error de conexión:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Error al conectar con MongoDB',
        error: error instanceof Error ? error.message : 'Unknown error',
        env: process.env.NODE_ENV
      },
      { status: 500 }
    );
  }
}
