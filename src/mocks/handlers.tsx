import { productsHandlers } from "./domains/products/products.handlers"
import { usersHandlers } from "./domains/users/users.handlers"

export const handlers = [
    ...productsHandlers,
    ...usersHandlers
]

