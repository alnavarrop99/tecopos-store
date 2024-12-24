import type { Route } from "../products/+types/products";
import { cart } from "~/session";
import { action as clear } from './clear'

export const action = async (request: Route.ActionArgs['request']) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const form = await request.json() as typeof cookie
  const id = +Object.keys(form)[0]

  if( cookie[id] <= 1 ){
    return clear(new Request(request.url, {
    headers: request.headers,
    body: JSON.stringify(form),
    method: request.method
  }))
  }

  cookie[id] = (cookie?.[id] ?? 0) - 1

  return Response.json(cookie, { 
    headers: {
      'Set-Cookie': await cart.serialize(cookie)
    }
  })
}
