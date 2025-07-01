import db from './db';
import { BlogPost, Category } from '@/types';

// Get all posts with author and category
export async function getAllPosts(): Promise<BlogPost[]> {
  console.log('Attempting to fetch posts from database...');

  const [rows] = await db.query(`
    SELECT 
      p.post_id AS id,
      p.post_slug AS slug,
      p.post_title AS title,
      p.content,
      COALESCE(c.category_name, 'Uncategorized') AS category,
      p.image_url AS imageUrl,
      p.date,
      p.author
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.category_id
    ORDER BY p.post_id DESC
  `);

  console.log('Raw database rows:', rows);

  const posts = (rows as any[]).map((row: any) => {
    const post = {
      id: String(row.id || row.post_id),
      slug: row.slug || row.post_slug || `post-${row.id}`,
      title: row.title || row.post_title || 'Untitled Post',
      content: row.content || '',
      category: row.category || 'Uncategorized',
      imageUrl: row.imageUrl || row.image_url || null,
      date: row.date,
      author: row.author || 'Unknown'
    };
    console.log(`Post ID: ${post.id}, Title: ${post.title}, Image URL: ${post.imageUrl}`); // Added log
    return post;
  });

  return posts;
}

// Simpler fallback version, if category join is unavailable
export async function getAllPostsSimple(): Promise<BlogPost[]> {
  try {
    const [rows] = await db.query('SELECT * FROM posts ORDER BY post_id DESC');
    console.log('Simple query result:', rows);

    return (rows as any[]).map((row: any) => ({
      id: String(row.post_id),
      title: row.post_title || 'Untitled',
      slug: row.post_slug || `post-${row.post_id}`,
      category: 'Technology', // default category name
      content: row.content || '',
      imageUrl: row.image_url,
      date: row.date,
      author: row.author || 'Unknown'
    }));
  } catch (error) {
    console.error('Simple query failed:', error);
    throw error;
  }
}

// Get all categories
export async function getAllCategories(): Promise<Category[]> {
  const [rows] = await db.query(`
    SELECT 
      category_id AS id,
      category_slug AS slug,
      category_name AS name
    FROM categories
    ORDER BY category_name
  `);

  return rows as Category[];
}

// Get posts by category ID
export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.post_id AS id,
        p.post_slug AS slug,
        p.post_title AS title,
        p.content,
        COALESCE(c.category_name, 'Uncategorized') AS category,
        p.image_url AS imageUrl,
        p.date,
        p.author
      FROM posts p
      LEFT JOIN categories c ON p.category_id = c.category_id
      WHERE p.category_id = ?
      ORDER BY p.post_id DESC
    `, [categoryId]);

    return (rows as any[]).map((row: any) => ({
      id: String(row.id || row.post_id),
      slug: row.slug || row.post_slug || `post-${row.id}`,
      title: row.title || row.post_title || 'Untitled Post',
      content: row.content || '',
      category: row.category || 'Uncategorized',
      imageUrl: row.imageUrl || row.image_url || null,
      date: row.date,
      author: row.author || 'Unknown'
    }));
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    throw error;
  }
}
