"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Book, BookOpen, Bookmark, Search, Heart } from "lucide-react"
import axios from "axios"
// Mock Bible books for demonstration


// Mock passage for demonstration
const passage = {
  reference: "John 3:16-21",
  verses: [
    { number: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { number: 17, text: "For God did not send his Son into the world to condemn the world, but to save the world through him." },
    { number: 18, text: "Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God's one and only Son." },
    { number: 19, text: "This is the verdict: Light has come into the world, but people loved darkness instead of light because their deeds were evil." },
    { number: 20, text: "Everyone who does evil hates the light, and will not come into the light for fear that their deeds will be exposed." },
    { number: 21, text: "But whoever lives by the truth comes into the light, so that it may be seen plainly that what they have done has been done in the sight of God." }
  ]
}

// Mock bookmarks for demonstration
const bookmarks = [
  { id: 1, reference: "Psalm 23", description: "The Lord is my shepherd" },
  { id: 2, reference: "Philippians 4:13", description: "I can do all things through Christ" },
  { id: 3, reference: "Romans 8:28", description: "All things work together for good" },
]

const BIBLE_CODE = {
  en:"bba9f40183526463-01"
}

let lang = "en" 

let Chapter ={
  bible_code:'',
  book_id:'',
  chatper_id:'',

}

export default function BiblePage() {
  const [selectedBook, setSelectedBook] = useState("john")
  const [selectedChapter, setSelectedChapter] = useState("3")
  const [searchQuery, setSearchQuery] = useState("")


  type BibleBookState = {
    id: string;
    name: string;
    chapters: number;
  };
  let [bibleBooks,setBibleBooks] = useState<BibleBookState[]>([])

  // Generate an array of chapters for the selected book
  const getChaptersForBook = (bookId: string) => {
    const book = bibleBooks.find(b => b.id === bookId)
    if (!book) return []
    return Array.from({ length: book.chapters }, (_, i) => i + 1)
  }
  type Book = {
    id: string;
    bibleId: string;
    abbreviation: string;
    name: string;
    nameLong: string;
    // chapters: Chapter[];
  };
  
  type Chapter = {
    id: string;
    bibleId: string;
    bookId: string;
    number: string;
    position: number;
    sections: Section[];
  };
  
  type Section = {
    id: string;
    bibleId: string;
    title: string;
    firstVerseId: string;
    lastVerseId: string;
    firstVerseOrgId: string;
    lastVerseOrgId: string;
  };
  useEffect(()=>{
    getBooksList()
  },[])
  const getBooksList = async()=>{
    const res = await axios.get("/api/bible/books") 
    console.log(res)
    let tempbooks =res.data.data.map((book:Book)=>{
      return {id:book.id,name:book.name,chapters:50}
    })
    setBibleBooks(tempbooks)
    // console.log(bibleBooks)

  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <h1 className="text-3xl font-bold">Bible</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search scripture..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bible Navigation */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Navigate
                </CardTitle>
                <CardDescription>
                  Select a book and chapter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Book</label>
                    <Select value={selectedBook} onValueChange={setSelectedBook}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a book" />
                      </SelectTrigger>
                      <SelectContent className="max-h-80">
                        {bibleBooks.map((book) => (
                          <SelectItem key={book.id} value={book.id}>
                            {book.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chapter</label>
                    <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a chapter" />
                      </SelectTrigger>
                      <SelectContent>
                        {getChaptersForBook(selectedBook).map((chapter) => (
                          <SelectItem key={chapter} value={chapter.toString()}>
                            {chapter}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Tabs defaultValue="bookmarks" className="w-full mt-4">
                    <TabsList className="w-full">
                      <TabsTrigger value="bookmarks" className="flex-1">Bookmarks</TabsTrigger>
                      <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="bookmarks" className="mt-4">
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {bookmarks.map((bookmark) => (
                            <div
                              key={bookmark.id}
                              className="p-2 rounded-md hover:bg-muted cursor-pointer flex items-start gap-2"
                            >
                              <Bookmark className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-sm">{bookmark.reference}</p>
                                <p className="text-xs text-muted-foreground">{bookmark.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    
                    <TabsContent value="history" className="mt-4">
                      <div className="flex flex-col items-center justify-center h-[300px] text-center">
                        <BookOpen className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Your reading history will appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bible Content */}
          <div className="md:col-span-3">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-2xl">{passage.reference}</CardTitle>
                  <CardDescription>
                    {bibleBooks.find(b => b.id === selectedBook)?.name} {selectedChapter}
                  </CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[550px] pr-4">
                  <div className="space-y-4 text-lg font-playfair">
                    {passage.verses.map((verse) => (
                      <p key={verse.number} className="leading-relaxed">
                        <sup className="text-primary font-bold mr-1">{verse.number}</sup>
                        {verse.text}
                      </p>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}