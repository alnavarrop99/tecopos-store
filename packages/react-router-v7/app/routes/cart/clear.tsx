import type { Route } from "./+types/clear";
import { redirect } from "react-router";
import { cart } from "~/session";

export const action = async ({ request }: Route.ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const form = await request.formData()
  const id = +Array.from( form.keys() )[0]

  const { [id]: _, ...rest } = cookie

  return redirect('/', { 
    headers: {
      'Set-Cookie': await cart.serialize(rest)
    }
  })
}
