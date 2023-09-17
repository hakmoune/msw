import { rest } from "msw";
import { userMockData } from "./users.entities";
import { root } from "../../baseUrls";
import { User } from "./users.type";


export const usersHandlers = [
    rest.post<User>(root("/users/add"), async (req, res, ctx) => {
        const requestBody = await req.json();
        const { firstName, lastName, age } = requestBody;

        return res(
            ctx.json(userMockData({
                firstName: firstName,
                lastName: lastName,
                age: age
            }))
        )
    })
]
