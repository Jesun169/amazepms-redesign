import Pricing from '@/components/sections/Pricing'

export const metadata = {
  title: 'Pricing',
  description: 'Choose the perfect plan for your team.',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
    </div>
  )
}