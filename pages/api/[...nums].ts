import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type RESDATA = {message:'success'|'error',data:number}

export default function handler(req: NextApiRequest,res:NextApiResponse<RESDATA>) {
    let nums = req.query.nums as string[]
    let numsInt = nums.reduce((a,b)=>(a+parseInt(b)),0)
    res.status(200).json({message:'success',data:numsInt})
}

