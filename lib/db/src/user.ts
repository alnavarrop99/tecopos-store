type Address = {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: Geolocation;
};

type Name = {
    firstname: string;
    lastname: string;
};

export type User = {
    id: number;
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone: string;
};

export type Query = Partial<{
  limit: number
  sort: 'desc'|'asc'
}>

export const all = async <T extends Array<User>>( query?: string | URLSearchParams, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/users' + (query ? `?${query}` : ''), {
    method: "GET",
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const id = async <T extends User>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "GET",
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const add = async <T extends User>(data: Omit<User, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/users', {
    method: "POST",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const edit = async <T extends User>(id: number, data: Omit<User, 'id'>, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}

export const remove = async <T extends User>(id: number, opt?: { abort?: AbortController, call?: (res: T) => void }): Promise<T> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "DELETE",
    signal: opt?.abort?.signal
  })
  const value = await res.json() as T
  if(res.ok) opt?.call?.(value)
  return value
}
