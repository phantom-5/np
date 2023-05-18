import { NextApiRequest, NextApiResponse } from "next";

type RESDATA = {message:'success'|'error'}

export default function handler(req: NextApiRequest,res:NextApiResponse<RESDATA>) {
    res.status(200).json({message:'success'})
}