import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'nutritionist';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Por favor ingrese su nombre'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Por favor ingrese su email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un email válido'],
    },
    password: {
      type: String,
      required: [true, 'Por favor ingrese una contraseña'],
      minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
      select: false, // No incluir password en las consultas por defecto
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'nutritionist'],
      default: 'user',
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

// Evitar que se creen modelos duplicados durante el desarrollo
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
