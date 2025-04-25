export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'nutricion' | 'vida-saludable';
  image: string;
  author: string;
  date: string;
  readTime: string;
}
