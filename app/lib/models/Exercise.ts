import mongoose from 'mongoose';

export interface IExercise extends mongoose.Document {
  name: string;
  description: string;
  type: 'cardio' | 'fuerza' | 'flexibilidad' | 'equilibrio';
  difficulty: 'principiante' | 'intermedio' | 'avanzado';
  muscleGroups: string[];
  instructions: string[];
  duration?: number; // en minutos (para cardio)
  sets?: number;     // para ejercicios de fuerza
  reps?: number;     // para ejercicios de fuerza
  videoUrl?: string;
  imageUrl?: string;
  equipment: string[];
  calories: number; // calorías quemadas estimadas por sesión
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const exerciseSchema = new mongoose.Schema<IExercise>(
  {
    name: {
      type: String,
      required: [true, 'Por favor ingrese el nombre del ejercicio'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Por favor ingrese una descripción'],
    },
    type: {
      type: String,
      enum: ['cardio', 'fuerza', 'flexibilidad', 'equilibrio'],
      required: [true, 'Por favor seleccione el tipo de ejercicio'],
    },
    difficulty: {
      type: String,
      enum: ['principiante', 'intermedio', 'avanzado'],
      required: [true, 'Por favor seleccione el nivel de dificultad'],
    },
    muscleGroups: [{
      type: String,
      required: [true, 'Por favor especifique los grupos musculares'],
    }],
    instructions: [{
      type: String,
      required: [true, 'Por favor ingrese las instrucciones'],
    }],
    duration: {
      type: Number,
      min: [1, 'La duración mínima es 1 minuto'],
    },
    sets: {
      type: Number,
      min: [1, 'Mínimo 1 serie'],
    },
    reps: {
      type: Number,
      min: [1, 'Mínimo 1 repetición'],
    },
    videoUrl: {
      type: String,
      validate: {
        validator: function(v: string) {
          return !v || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(v);
        },
        message: 'Por favor ingrese una URL válida',
      },
    },
    imageUrl: {
      type: String,
      validate: {
        validator: function(v: string) {
          return !v || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(v);
        },
        message: 'Por favor ingrese una URL válida',
      },
    },
    equipment: [{
      type: String,
      required: [true, 'Por favor especifique el equipamiento necesario'],
    }],
    calories: {
      type: Number,
      required: [true, 'Por favor ingrese las calorías estimadas'],
      min: [0, 'Las calorías no pueden ser negativas'],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar las búsquedas
exerciseSchema.index({ name: 1 });
exerciseSchema.index({ type: 1 });
exerciseSchema.index({ difficulty: 1 });
exerciseSchema.index({ muscleGroups: 1 });

const Exercise = mongoose.models.Exercise || mongoose.model<IExercise>('Exercise', exerciseSchema);

export default Exercise;
