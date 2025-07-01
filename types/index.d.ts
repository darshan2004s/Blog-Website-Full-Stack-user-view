export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string;
  category: string;
  date: Date;
  imageUrl: string;
  author: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
};
