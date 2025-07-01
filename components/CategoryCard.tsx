import Link from 'next/link';
import { Category } from '@/types'; // Ensure Category type is correctly imported

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="block">
      <div className="bg-white/5 backdrop-blur-lg border border-slate-700/30 rounded-2xl shadow-xl p-6 text-center
                  hover:shadow-2xl hover:border-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}