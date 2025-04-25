import mongoose from 'mongoose';

export interface ISubscription extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  plan: 'basic' | 'premium' | 'elite';
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  startDate: Date;
  endDate: Date;
  price: number;
  paymentMethod: string;
  paymentId: string;
  autoRenew: boolean;
  features: string[];
  nutritionPlan?: mongoose.Types.ObjectId;
  exercisePlan?: mongoose.Types.ObjectId;
  consultations: number; // número de consultas disponibles
  cancelReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

const subscriptionSchema = new mongoose.Schema<ISubscription>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    plan: {
      type: String,
      enum: ['basic', 'premium', 'elite'],
      required: [true, 'Por favor seleccione un plan'],
    },
    status: {
      type: String,
      enum: ['active', 'cancelled', 'expired', 'pending'],
      default: 'pending',
    },
    startDate: {
      type: Date,
      required: [true, 'Por favor ingrese la fecha de inicio'],
    },
    endDate: {
      type: Date,
      required: [true, 'Por favor ingrese la fecha de finalización'],
    },
    price: {
      type: Number,
      required: [true, 'Por favor ingrese el precio'],
      min: [0, 'El precio no puede ser negativo'],
    },
    paymentMethod: {
      type: String,
      required: [true, 'Por favor ingrese el método de pago'],
    },
    paymentId: {
      type: String,
      required: [true, 'Por favor ingrese el ID de pago'],
    },
    autoRenew: {
      type: Boolean,
      default: true,
    },
    features: [{
      type: String,
      required: true,
    }],
    nutritionPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NutritionPlan',
    },
    exercisePlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    },
    consultations: {
      type: Number,
      required: true,
      min: [0, 'El número de consultas no puede ser negativo'],
    },
    cancelReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar el rendimiento
subscriptionSchema.index({ user: 1 });
subscriptionSchema.index({ status: 1 });
subscriptionSchema.index({ plan: 1 });
subscriptionSchema.index({ endDate: 1 });
subscriptionSchema.index({ paymentId: 1 });

// Middleware para validar fechas
subscriptionSchema.pre('save', function(next) {
  if (this.endDate <= this.startDate) {
    next(new Error('La fecha de finalización debe ser posterior a la fecha de inicio'));
  }
  next();
});

const Subscription = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', subscriptionSchema);

export default Subscription;
