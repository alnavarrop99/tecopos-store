import { Hero, HeroSection } from "@tecopos/components"

export const Empty = () => {
  return (
    <Hero className="bg-base-100 lg:min-h-[50dvh] min-h-full">
      <HeroSection className="flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-600">
            Search some article in our store
          </p>
          <p className="text-gray-600">
            Looks like you haven't added any items yet.
          </p>
        </div>
      </HeroSection>
    </Hero>
  )
}
