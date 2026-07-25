export async function generateStaticParams() {
  return [
    { slug: 'future-of-project-management' },
    { slug: 'remote-team-collaboration-tips' },
    { slug: 'maximizing-productivity-agile' },
  ]
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const posts = {
    'future-of-project-management': {
      title: 'The Future of Project Management',
      description: 'Discover how AI and automation are transforming project management.',
    },
    'remote-team-collaboration-tips': {
      title: '10 Tips for Remote Team Collaboration',
      description: 'Essential strategies for keeping your remote team productive and connected.',
    },
    'maximizing-productivity-agile': {
      title: 'Maximizing Productivity with Agile Methodologies',
      description: 'Learn how agile practices can boost your team\'s efficiency.',
    },
  }

  const post = posts[slug] || { title: 'Blog Post', description: 'Blog post details.' }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPost({ params }) {
  const slug = params.slug
  const posts = {
    'future-of-project-management': {
      title: 'The Future of Project Management',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'January 15, 2024',
      author: 'John Doe',
    },
    'remote-team-collaboration-tips': {
      title: '10 Tips for Remote Team Collaboration',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: 'January 10, 2024',
      author: 'Jane Smith',
    },
    'maximizing-productivity-agile': {
      title: 'Maximizing Productivity with Agile Methodologies',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: 'January 5, 2024',
      author: 'Mike Johnson',
    },
  }

  const post = posts[slug] || { title: 'Post Not Found', content: 'The requested post could not be found.', date: '', author: '' }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="glass p-8 rounded-2xl">
          <div className="mb-8">
            <span className="text-sm text-primary-400">{post.date}</span>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <p className="text-gray-400">By {post.author}</p>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  )
}