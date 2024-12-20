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

export type Query = {
  limit: number
  sort: 'desc'|'asc'
}

export const all = async ( query?: string | URLSearchParams): Promise<Array<User>> => {
  const res = await fetch(import.meta.env.VITE_API + '/users' + (query ?? ''), {
    method: "GET"
  })
  return res.json()
}

export const id = async (id: number ): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "GET"
  })
  return res.json()
}

export const add = async (data: Omit<User, 'id'>): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users', {
    method: "POST",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const edit = async (id: number, data: Omit<User, 'id'>): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "PATCH",
    body: JSON.stringify(data)
  })
  return res.json()
}

export const remove = async (id: number): Promise<User> => {
  const res = await fetch(import.meta.env.VITE_API + '/users/' + id, {
    method: "DELETE",
  })
  return res.json()
}
