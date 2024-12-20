type Order = {
    productId: number;
    quantity: number;
};

export type Cart = {
    id: number;
    userId: number;
    date: string;
    products: Order[];
};

export type Query = {
  limit: number
  sort: 'desc'|'asc'
  startdate: string
  enddate: string
}

export const all = async ( query?: string | URLSearchParams): Promise<Array<Cart>> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts' + (query ?? ''), {
    method: "GET"
  })
  return res.json()
}

export const id = async (id: number ): Promise<Cart> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "GET"
  })
  return res.json()
}

export const byUser = async (userId: number): Promise<Array<Cart>> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/category/user/' + userId, {
    method: 'GET'
  })
  return res.json()
}

export const add = async (data: Omit<Cart, 'id'>): Promise<Cart> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts', {
    method: "POST",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const edit = async (id: number, data: Omit<Cart, 'id'>): Promise<Cart> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "PATCH",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const remove = async (id: number): Promise<Cart> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "DELETE",
  })
  return res.json()
}
