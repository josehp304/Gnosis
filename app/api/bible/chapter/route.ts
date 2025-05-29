import { NextResponse } from "next/server";
import axios from "axios"
export async function POST(request:Request){
    let chapter_id = await request.json()
    const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/bba9f40183526463-01/chapters/${chapter_id.chapter_id}`,
        {
            headers:{
                "accept": "application/json",
                "api-key":process.env.API_BIBLE_KEY,
                
            }
        }
    )
    return NextResponse.json(response.data)    
}