import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type RESDATA = {message:'success'|'error',data:{name:string, rollno:number, time:string}}

export default function handler(req: NextApiRequest,res:NextApiResponse<RESDATA>) {
    let name = req.query.name
    const filePath = path.join(
        process.cwd(),
        "dataFolder",
        "feedbackData.json"
      );
    const fileData = fs.readFileSync(filePath, "utf-8");
    const dataJSON = JSON.parse(fileData);
    let targetItem = dataJSON.filter((item:{name:string,rollno:number,time:string})=>{return item.name===name})
    res.status(200).json({message:'success',data:{...targetItem[0]}})
}