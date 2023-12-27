// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis"
import process from "process"

// authenticates the service account to be used in this context

export const getData = async () => {
  // allows you to use drive API methods e.g. listing files, creating files.

  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/drive"],
    keyFile:  process.cwd() + "/credentials.json",
  })

  
  try {
    console.log("auth", auth)
    const drive = google.drive({ version: "v3", auth })
    const res = await drive.files.list()
    const files = res.data.files

    // Fetches the files from the drive and prints the names and ids
    console.log("Files:")
    files.map((file) => {
      console.log(`${file.name} (${file.id})`)
    })

    return files
  } catch (error) {
    console.error("Error fetching files:", error.message)
    return null
  }
}

export default async function handler(req, res) {
  const data = await getData()
  console.log(data)
  res.status(200).json({ response: data })
}
