import mongoose from 'mongoose';

export interface IMeal {
  name: string;
  foods: Array<{
    name: string;
    portion: string;
    calories: number;
  }>;
  time: string;
}

export interface INutritionPlan extends mongoose.Document {
  title: string;
  description: string;
  type: 'basic' | 'premium' | 'elite';
  duration: number; // en semanas
  meals: IMeal[];
  calories: number;
  macros: {
    proteins: number;
    carbs: number;
    fats: number;
  };
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const nutritionPlanSchema = new mongoose.Schema<INutritionPlan>(
  {
    title: {
      type: String,
      required: [true, 'Por favor ingrese un título para el plan'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Por favor ingrese una descripción'],
    },
    type: {
      type: String,
      enum: ['basic', 'premium', 'elite'],
      required: true,
    },
    duration: {
      type: Number,
      required: [true, 'Por favor especifique la duración del plan'],
      min: [1, 'La duración mínima es de 1 semana'],
    },
    meals: [{
      name: {
        type: String,
        required: true,
      },
      foods: [{
        name: {
          type: String,
          required: true,
        },
        portion: {
          type: String,
          required: true,
        },
        calories: {
          type: Number,
          required: true,
        },
      }],
      time: {
        type: String,
        required: true,
      },
    }],
    calories: {
      type: Number,
      required: true,
    },
    macros: {
      proteins: {
        type: Number,
        required: true,
      },
      carbs: {
        type: Number,
        required: true,
      },
      fats: {
        type: Number,
        required: true,
      },
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

const NutritionPlan = mongoose.models.NutritionPlan || mongoose.model<INutritionPlan>('NutritionPlan', nutritionPlanSchema);

export default NutritionPlan;
