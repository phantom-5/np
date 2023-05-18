import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type RESDATA = {
  message: "success" | "error";
  data: { name: string; rollno: number; time: string }[] | string;
};
type REQDATA = { name: string; rollno: number };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RESDATA>
) {
  if (req.method === "POST") {
    let incomingData: REQDATA = req.body;
    let newData = {
      name: incomingData.name,
      rollno: incomingData.rollno,
      time: new Date().toISOString(),
    };
    const filePath = path.join(
      process.cwd(),
      "dataFolder",
      "feedbackData.json"
    );
    const fileData = fs.readFileSync(filePath, "utf-8");
    const dataJSON = JSON.parse(fileData);
    dataJSON.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(dataJSON));
    res.status(201).json({ message: "success", data: dataJSON });
  } else if (req.method === "GET") {
    const filePath = path.join(
      process.cwd(),
      "dataFolder",
      "feedbackData.json"
    );
    const fileData = fs.readFileSync(filePath, "utf-8");
    const dataJSON = JSON.parse(fileData);
    res.status(201).json({ message: "success", data: dataJSON });
  } else {
    res.status(400).json({ message: "error", data: "Bad Request" });
  }
}

export function getDataFromFeedback() {
  const filePath = path.join(process.cwd(), "dataFolder", "feedbackData.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const dataJSON = JSON.parse(fileData);
  return dataJSON
}
