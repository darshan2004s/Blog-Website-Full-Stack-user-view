export async function getBlogPosts() {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const samplePosts = [
    {
      id: '1',
      slug: 'getting-started-with-nextjs-app-router',
      title: 'Getting Started with Next.js App Router',
      excerpt: 'Learn the basics of Next.js 14 and its powerful App Router for modern web development.',
      content: `
        <p>Next.js 14 introduces powerful features that make building modern web applications easier than ever.</p>
      `,
      category: 'WEB DEVELOPMENT',
      date: '2024-01-15',
      imageUrl: '/api/placeholder/800/400'
    },
    {
      id: '2',
      slug: 'styling-with-tailwind-css-quick-start-guide',
      title: 'Styling with Tailwind CSS: A Quick Start Guide',
      excerpt: 'A utility-first CSS framework for rapid UI building.',
      content: `
        <p>Tailwind CSS has revolutionized how developers approach styling in modern web applications.</p>
      `,
      category: 'CSS',
      date: '2024-01-10',
      imageUrl: '/api/placeholder/800/400'
    },
    {
      id: '3',
      slug: 'designing-simple-blog-api-best-practices',
      title: 'Designing a Simple Blog API: Best Practices',
      excerpt: 'Tips for structuring your REST API for blog data efficiently.',
      content: `
        <p>Building a well-designed API is crucial for any blog platform.</p>
      `,
      category: 'API',
      date: '2024-01-05',
      imageUrl: '/api/placeholder/800/400'
    }
  ];

  return samplePosts;
}
