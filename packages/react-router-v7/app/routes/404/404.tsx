import type { Route } from "./+types/404"
import { AlertCircle, Store } from "lucide-react"
import { Link } from "~/comp/link"
import { Alert, Card, CardAction, CardBody, Hero, HeroSection } from "@tecopos/components"

export default ({}: Route.ComponentProps) => {
  return (<Hero className="min-h-screen bg-gray-100">
    <HeroSection>
    <Card className="p-8 max-w-md w-full text-center">
      <Alert>
        <AlertCircle className="size-16 text-error" />
        <h1 className="text-4xl font-bold">404</h1>
      </Alert>
      <CardBody>
        <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <CardAction className="justify-center">
          <Store /> <Link to="/" > Go Home</Link>
        </CardAction>
      </CardBody>
    </Card>
    </HeroSection>
  </Hero>
  )
}
