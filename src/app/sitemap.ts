import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://allvao.com'; // Change this if domain changes

    // Static routes
    const routes = [
        '',
        '/about',
        '/about/network',
        '/contact',
        '/waitlist',
        '/projects',
        '/blog',
        '/privacy',
        '/terms',
    ];

    // Project sub-brand routes
    const projects = [
        '/projects/omniafeed',
        '/projects/shelvyn',
        '/projects/toolvana',
    ];

    // Dynamic Blog Routes
    const posts = blogPosts.map((post) => `/blog/${post.slug}`);

    // Combine all
    const allRoutes = [...routes, ...projects, ...posts];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(), // Ideally fetch from file/content modification date
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
