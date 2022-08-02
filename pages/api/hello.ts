// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();


type Data = {
  name: string
}



handler.get(async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    res.status(200).json({ name: "john doe" })
  } catch (error) {
    console.log(error)

  }
})

export default handler


// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
