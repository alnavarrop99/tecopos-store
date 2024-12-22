import { Hero, HeroSection } from "@tecopos/components"
import { Link } from "../../comp/link"

export const Empty = () => {
  return (
    <Hero className="bg-base-100 lg:min-h-[50dvh] min-h-[80dvh]">
      <HeroSection className="flex-col">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">The store is empty</h2>
          <p className="text-gray-600">
            Search with other catergory in our store
          </p>
          <p className="text-gray-600">
            Looks like you haven't added any items yet.
          </p>
          <Link className='text-bold' to="/"> Reset here ... </Link>
        </div>
      </HeroSection>
    </Hero>
  )
}
