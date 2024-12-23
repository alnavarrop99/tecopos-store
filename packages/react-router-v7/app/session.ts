import { createCookie } from 'react-router'

export const cart = createCookie("cart", {
  secrets: ['s3cret'],
  secure: false,
  maxAge: 600_000 
})
