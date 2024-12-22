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

export const all = async ( query?: string | URLSearchParams, abort?: AbortController): Promise<Array<User>> => {
  const res = await fetch(import.meta.env.VITE_API + '/users' + (query ? `?${query}` : ''), {
    method: "GET",
    signal: abort?.signal
  })
  return res.json()
}

export const id = async (id: number, abort?: AbortController): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "GET",
    signal: abort?.signal
  })
  return res.json()
}

export const add = async (data: Omit<User, 'id'>, abort?: AbortController): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users', {
    method: "POST",
    body: JSON.stringify(data),
    signal: abort?.signal
  })
  return res.json()
}

export const edit = async (id: number, data: Omit<User, 'id'>, abort?: AbortController): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "PATCH",
    body: JSON.stringify(data),
    signal: abort?.signal
  })
  return res.json()
}

export const remove = async (id: number, abort?: AbortController): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "DELETE",
    signal: abort?.signal
  })
  return res.json()
}
