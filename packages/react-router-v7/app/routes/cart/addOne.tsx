import type { Route } from "./+types/addOne";
import { redirect } from "react-router";
import { cart } from "~/session";

export const action = async ({ request }: Route.ClientActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const form = await request.formData()
  const id = +Array.from( form.keys() )[0]

  cookie[id] = (cookie?.[id] ?? 0) + 1

  return redirect('/', { 
    headers: {
      'Set-Cookie': await cart.serialize(cookie)
    }
  })
}
