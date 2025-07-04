// lib/api.ts
import { supabase } from './supabaseClient';
import { BlogPost, Category } from '@/types';

interface SupabasePostRow {
  post_id: number;
  post_slug: string;
  post_title: string;
  content: string;
  image_url: string | null;
  date: string;
  author: string | null;
  category_id: number | null; // Add this to fetch the category ID directly
}

interface SupabaseCategoryRow {
  category_id: number;
  category_name: string;
  category_slug: string;
}

// Get all posts with joined category name
export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      post_id,
      post_slug,
      post_title,
      content,
      image_url,
      date,
      author,
      category_id
    `)
    .order('post_id', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  const categories = await getAllCategories(); // Fetch all categories once

  return (data || []).map((row: SupabasePostRow) => {
    let categoryName = 'Uncategorized';
    if (row.category_id) {
      const foundCategory = categories.find(cat => Number(cat.id) === row.category_id);
      if (foundCategory) {
        categoryName = foundCategory.name;
      }
    }
    return {
      id: String(row.post_id),
      slug: row.post_slug,
      title: row.post_title,
      content: row.content,
      category: categoryName,
      imageUrl: row.image_url || '',
      date: row.date,
      author: row.author || 'Unknown'
    };
  });
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      post_id,
      post_slug,
      post_title,
      content,
      image_url,
      date,
      author,
      category_id
    `)
    .eq('post_slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }

  if (!data) {
    return null;
  }

  let categoryName = 'Uncategorized';
  if (data.category_id) {
    const categories = await getAllCategories(); // Fetch all categories
    const foundCategory = categories.find(cat => Number(cat.id) === data.category_id);
    if (foundCategory) {
      categoryName = foundCategory.name;
    }
  }

  return {
    id: String(data.post_id),
    slug: data.post_slug,
    title: data.post_title,
    content: data.content,
    category: categoryName, // Use the fetched category name
    imageUrl: data.image_url || '',
    date: data.date,
    author: data.author || 'Unknown'
  };
}

// Get all post slugs for static path generation
export async function getAllPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('post_slug');

  if (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }

  return (data || []).map((row: { post_slug: string }) => row.post_slug);
}

// Get all categories
export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select(`
      category_id,
      category_name,
      category_slug
    `)
    .order('category_name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return (data || []).map((row: SupabaseCategoryRow) => ({
    id: String(row.category_id),
    name: row.category_name,
    slug: row.category_slug
  }));
}

// Get posts by category ID
export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      post_id,
      post_slug,
      post_title,
      content,
      image_url,
      date,
      author,
      category_id
    `)
    .eq('category_id', categoryId)
    .order('post_id', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  const categories = await getAllCategories(); // Fetch all categories once

  return (data || []).map((row: SupabasePostRow) => {
    let categoryName = 'Uncategorized';
    if (row.category_id) {
      const foundCategory = categories.find(cat => Number(cat.id) === row.category_id);
      if (foundCategory) {
        categoryName = foundCategory.name;
      }
    }
    return {
      id: String(row.post_id),
      slug: row.post_slug,
      title: row.post_title,
      content: row.content,
      category: categoryName,
      imageUrl: row.image_url || '',
      date: row.date,
      author: row.author || 'Unknown'
    };
  });
}
