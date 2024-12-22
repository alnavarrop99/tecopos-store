export type Res = {
  token: string;
};

export type Req = {
  username: string;
  password: string;
};

export const add = async (data: Omit<Res, 'id'>, abort?: AbortController): Promise<Res> => {
  const res = await fetch(import.meta.env.VITE_API + '/auth/login', {
    method: "POST",
    body: JSON.stringify(data),
    signal: abort?.signal
  })
  return res.json()
}
