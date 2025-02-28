import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import { BlogPost, BlogPostMeta } from '@/data/types/blog';
import { formatDistanceToNow, parseISO } from 'date-fns';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  excerpt: string;
  featuredImage: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getSortedPostsData(): BlogPost[] {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      author: matterResult.data.author || '',
      categories: matterResult.data.categories || [],
      excerpt: matterResult.data.excerpt || '',
      featuredImage: matterResult.data.featuredImage || '',
      content: matterResult.content,
    } as BlogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism) // For syntax highlighting
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    author: matterResult.data.author || '',
    categories: matterResult.data.categories || [],
    excerpt: matterResult.data.excerpt || '',
    featuredImage: matterResult.data.featuredImage || '',
    content: contentHtml,
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
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