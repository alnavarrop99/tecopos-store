import type { Route } from "../products/+types/products";
import { cart } from "~/session";

export const action = async (request: Route.ActionArgs['request']) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const form = await request.json() as typeof cookie
  const id = +Object.keys(form)[0]

  const { [id]: _, ...rest } = cookie

  return Response.json(cookie, { 
    headers: {
      'Set-Cookie': await cart.serialize(rest)
    }
  })
}
