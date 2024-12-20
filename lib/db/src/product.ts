export type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};

export type Query = {
  limit: number
  sort: 'desc'|'asc'
}

export const all = async ( query?: string | URLSearchParams): Promise<Array<Product>> => {
  const res = await fetch(import.meta.env.VITE_API + '/products' + (query ?? ''), {
    method: "GET"
  })
  return res.json()
}

export const id = async (id: number ): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "GET"
  })
  return res.json()
}

export const category = async (value: string): Promise<Array<Product>> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/category/' + value, {
    method: 'GET'
  })
  return res.json()
}

export const add = async (data: Omit<Product, 'id'>): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products', {
    method: "POST",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const edit = async (id: number, data: Omit<Product, 'id'>): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "PATCH",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const remove = async (id: number): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "DELETE",
  })
  return res.json()
}
