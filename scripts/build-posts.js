const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'content', 'posts');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'generated');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'posts.json');

async function buildPosts() {
  const { marked } = await import('marked');

  marked.setOptions({ gfm: true, breaks: false });

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Read all markdown files
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

    // Convert markdown body to HTML
    const contentHtml = marked(content);

    return {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      featured: data.featured || false,
      contentHtml,
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`✓ Built ${posts.length} posts → src/generated/posts.json`);
}

buildPosts();
