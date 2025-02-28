import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, BlogPostMeta } from '@/data/types/blog';
import { formatDistanceToNow, parseISO } from 'date-fns';

const blogsDirectory = path.join(process.cwd(), 'src/data/blog');

export function getBlogSlugs(): string[] {
  return fs.readdirSync(blogsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const blogPostMeta = {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    tags: data.tags || [],
    readingTime: calculateReadingTime(content)
  };
  
  return {
    ...blogPostMeta,
    content
  };
}

export async function getProcessedBlogPostBySlug(slug: string): Promise<BlogPost> {
  const post = getBlogPostBySlug(slug);
  
  // Process markdown content to HTML without syntax highlighting
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(post.content);
    
  return {
    ...post,
    content: processedContent.toString()
  };
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map(slug => getBlogPostBySlug(slug))
    .sort((post1, post2) => (new Date(post2.date).getTime() - new Date(post1.date).getTime()));
  
  return posts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    tags: post.tags,
    readingTime: post.readingTime
  }));
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

export function getFormattedDate(dateString: string): string {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
} 