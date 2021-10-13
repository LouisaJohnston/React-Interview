import type { NextApiRequest, NextApiResponse } from "next";

type starterObj = {
  id: string;
  name: "test";
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const objectArray = req.body;
    let returnArray;
    for (let obj of objectArray) {
      console.log(typeof obj.id);
      if (typeof obj.id !== "string" || obj.name !== ("test" || "test")) {
        return res.status(422).end()
      } else {
        returnArray = objectArray.map(({ id, name }: starterObj) => {
          return { [id]: name };
        });
        return res.status(200).send(returnArray);
      }
    }
  } catch (err) {
    res.status(400);
    console.error(err);
  }
}
