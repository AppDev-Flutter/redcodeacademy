import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "visitor_count.txt");

  let count = 0;

  // Read old count if file exists
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    count = parseInt(data) || 0;
  }

  // Increase count
  count++;

  // Save new count
  fs.writeFileSync(filePath, String(count));

  res.status(200).send(String(count));
}
