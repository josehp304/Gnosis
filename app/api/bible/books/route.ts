import { NextResponse } from "next/server";
import axios from "axios"


export  async function GET(request:Request) {
    // const data = await request.json() as {bible_id:string}
    const response = await  axios.get(`https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/books`,{
        headers:{
          "accept": "application/json",
          "api-key": process.env.API_BIBLE_KEY
        }
      })

      // console.log(data.bible_id)
      // console.log(response)
      return NextResponse.json(response.data)
}