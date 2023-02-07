// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {client} from '../../utils/sanity.config'
export default async function(req, res){
    let query='*[_type=="post"]';
    let result=await client.fetch(query);
    res.status(200).json({message:"Successs",data:result})

}


