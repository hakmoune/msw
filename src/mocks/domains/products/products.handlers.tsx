import { rest } from "msw"
import { root } from "../../baseUrls";
import { productMockData } from "./products.fixtures";
import { Product } from "./products.type";


export const productsHandlers = [
    rest.get<Product>(root("/products/1"), (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.delay(500),
            ctx.json(productMockData)
        )
    })
]

