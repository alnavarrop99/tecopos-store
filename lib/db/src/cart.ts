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

export type Query = Partial<{
  limit: number
  sort: 'desc'|'asc'
  startdate: string
  enddate: string
}>

export const all = async <T extends Array<Cart>>( query?: string | URLSearchParams, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts' + (query ? `?${query}` : ''), {
    method: "GET",
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const id = async <T extends Cart>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "GET",
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const byUser = async <T extends Array<Cart>>(userId: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/category/user/' + userId, {
    method: 'GET',
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const add = async <T extends Cart>(data: Omit<Cart, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts', {
    method: "POST",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const edit = async <T extends Cart>(id: number, data: Omit<Cart, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const remove = async <T extends Cart>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/carts/' + id, {
    method: "DELETE",
    signal: opt?.abort?.signal
  })

  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}
