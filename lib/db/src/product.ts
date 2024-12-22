export type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};

export type Query = Partial<{
  limit: number
  sort: 'desc'|'asc'
}>

export const all = async ( query?: string | URLSearchParams, abort?: AbortController): Promise<Array<Product>> => {
  try {
  const res = await fetch(import.meta.env.VITE_API + '/products' + (query ? `?${query}` : ''), {
    method: "GET",
    signal: abort?.signal
  })
  return res.json()
  } catch(err){
    // @ts-ignore
    return { err: err as string }
  }
}

export const id = async (id: number, abort?: AbortController): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "GET",
    signal: abort?.signal
  })
  return res.json()
}

export const category = async (value: string, abort?: AbortController): Promise<Array<Product>> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/category/' + value, {
    method: 'GET',
    signal: abort?.signal
  })
  return res.json()
}

export const add = async (data: Omit<Product, 'id'>, abort?: AbortController): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products', {
    method: "POST",
    body: JSON.stringify(data),
    signal: abort?.signal
  })
  return res.json()
}

export const edit = async (id: number, data: Omit<Product, 'id'>, abort?: AbortController): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    signal: abort?.signal
  })
  return res.json()
}

export const remove = async (id: number, abort?: AbortController): Promise<Product> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "DELETE",
    signal: abort?.signal
  })
  return res.json()
}
