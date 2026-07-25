import About from '@/components/sections/About'

export const metadata = {
  title: 'About Us',
  description: 'Learn about AmazePMS and our mission to transform project management.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}