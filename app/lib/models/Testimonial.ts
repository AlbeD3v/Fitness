import mongoose from 'mongoose';

export interface ITestimonial extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  title: string;
  content: string;
  rating: number;
  beforeImage?: string;
  afterImage?: string;
  weightLost?: number;
  duration: number; // duración del programa en semanas
  programType: 'nutricion' | 'ejercicio' | 'completo';
  achievement: string;
  status: 'pendiente' | 'aprobado' | 'rechazado';
  featured: boolean;
  verifiedPurchase: boolean;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new mongoose.Schema<ITestimonial>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Por favor ingrese un título para el testimonio'],
      trim: true,
      maxlength: [100, 'El título no puede tener más de 100 caracteres'],
    },
    content: {
      type: String,
      required: [true, 'Por favor ingrese el contenido del testimonio'],
      minlength: [50, 'El testimonio debe tener al menos 50 caracteres'],
      maxlength: [1000, 'El testimonio no puede tener más de 1000 caracteres'],
    },
    rating: {
      type: Number,
      required: [true, 'Por favor ingrese una calificación'],
      min: [1, 'La calificación mínima es 1'],
      max: [5, 'La calificación máxima es 5'],
    },
    beforeImage: {
      type: String,
      validate: {
        validator: function(v: string) {
          return !v || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(v);
        },
        message: 'Por favor ingrese una URL válida para la imagen',
      },
    },
    afterImage: {
      type: String,
      validate: {
        validator: function(v: string) {
          return !v || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(v);
        },
        message: 'Por favor ingrese una URL válida para la imagen',
      },
    },
    weightLost: {
      type: Number,
      min: [0, 'El peso perdido no puede ser negativo'],
    },
    duration: {
      type: Number,
      required: [true, 'Por favor ingrese la duración del programa'],
      min: [1, 'La duración mínima es 1 semana'],
    },
    programType: {
      type: String,
      enum: ['nutricion', 'ejercicio', 'completo'],
      required: [true, 'Por favor seleccione el tipo de programa'],
    },
    achievement: {
      type: String,
      required: [true, 'Por favor ingrese el logro principal'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['pendiente', 'aprobado', 'rechazado'],
      default: 'pendiente',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    verifiedPurchase: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar el rendimiento
testimonialSchema.index({ user: 1 });
testimonialSchema.index({ status: 1 });
testimonialSchema.index({ featured: 1 });
testimonialSchema.index({ rating: -1 });
testimonialSchema.index({ programType: 1 });

const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', testimonialSchema);

export default Testimonial;
