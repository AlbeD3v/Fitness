import mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  category: 'nutricion' | 'ejercicio' | 'salud' | 'motivacion' | 'recetas';
  tags: string[];
  author: mongoose.Types.ObjectId;
  status: 'draft' | 'published';
  publishedAt?: Date;
  readTime: number; // tiempo estimado de lectura en minutos
  likes: number;
  views: number;
  comments: Array<{
    user: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, 'Por favor ingrese el título del post'],
      trim: true,
      maxlength: [100, 'El título no puede tener más de 100 caracteres'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, 'Por favor ingrese el contenido del post'],
    },
    excerpt: {
      type: String,
      required: [true, 'Por favor ingrese un resumen del post'],
      maxlength: [200, 'El resumen no puede tener más de 200 caracteres'],
    },
    coverImage: {
      type: String,
      required: [true, 'Por favor ingrese una imagen de portada'],
      validate: {
        validator: function(v: string) {
          return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(v);
        },
        message: 'Por favor ingrese una URL válida para la imagen',
      },
    },
    category: {
      type: String,
      enum: ['nutricion', 'ejercicio', 'salud', 'motivacion', 'recetas'],
      required: [true, 'Por favor seleccione una categoría'],
    },
    tags: [{
      type: String,
      trim: true,
    }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    publishedAt: {
      type: Date,
    },
    readTime: {
      type: Number,
      required: true,
      min: [1, 'El tiempo de lectura debe ser al menos 1 minuto'],
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    comments: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      content: {
        type: String,
        required: true,
        maxlength: [500, 'El comentario no puede tener más de 500 caracteres'],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }],
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar el rendimiento
postSchema.index({ slug: 1 });
postSchema.index({ category: 1 });
postSchema.index({ tags: 1 });
postSchema.index({ status: 1, publishedAt: -1 });
postSchema.index({ author: 1 });

// Middleware para generar el slug antes de guardar
postSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = this.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  next();
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', postSchema);

export default Post;
