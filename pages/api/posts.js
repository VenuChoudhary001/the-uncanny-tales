// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../utils/sanity.cli.config";
export default async function handler(req, res) {
  let query = '*[_type=="post"]';
  let result = await client.fetch(query);
  res.status(200).json({ message: "Successs", data: result });
}
