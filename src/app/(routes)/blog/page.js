export const metadata = {
  title: 'Blog',
  description: 'Latest insights and updates from AmazePMS.',
}

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Project Management',
      excerpt: 'Discover how AI and automation are transforming project management.',
      date: 'January 15, 2024',
      slug: 'future-of-project-management',
    },
    {
      id: 2,
      title: '10 Tips for Remote Team Collaboration',
      excerpt: 'Essential strategies for keeping your remote team productive and connected.',
      date: 'January 10, 2024',
      slug: 'remote-team-collaboration-tips',
    },
    {
      id: 3,
      title: 'Maximizing Productivity with Agile Methodologies',
      excerpt: 'Learn how agile practices can boost your team\'s efficiency.',
      date: 'January 5, 2024',
      slug: 'maximizing-productivity-agile',
    },
  ]

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, updates, and best practices from the AmazePMS team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <span className="text-sm text-primary-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-2"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}