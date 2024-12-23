import type { Route } from "./+types/minusOne";
import { redirect } from "react-router";
import { cart } from "~/session";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const form = await request.formData()
  const id = +Array.from( form.keys() )[0]

  if( cookie[id] <= 1 ){
    return redirect('/cart/clear', {
      headers: {
        'Set-Cookie': await cart.serialize(cookie)
      }
    })
  }

  cookie[id] = (cookie?.[id] ?? 0) - 1

  return redirect('/', { 
    headers: {
      'Set-Cookie': await cart.serialize(cookie)
    }
  })
}
