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

export const all = async <T extends Array<Product>>( query?: string | URLSearchParams, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products' + (query ? `?${query}` : ''), {
    method: "GET",
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const id = async <T extends Product>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "GET",
    signal: opt?.abort?.signal
  })
  
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const category = async <T extends Array<Product>>(search: string, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/category/' + search, {
    method: 'GET',
    signal: opt?.abort?.signal
  })
  
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const add = async <T extends Product>(data: Omit<Product, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products', {
    method: "POST",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })
  
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const edit = async <T extends Product>(id: number, data: Omit<Product, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })
  
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const remove = async <T extends Product>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/products/' + id, {
    method: "DELETE",
    signal: opt?.abort?.signal
  })
  
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}
