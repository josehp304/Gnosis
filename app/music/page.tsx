"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Play, Pause, SkipForward, SkipBack, Plus, Search, Heart, Volume2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
// Mock data for songs
const devotionalSongs = [
  { id: 1, title: "Amazing Grace", artist: "Chris Tomlin", duration: "4:32", image: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, title: "How Great is Our God", artist: "Hillsong Worship", duration: "5:21", image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "In Christ Alone", artist: "Keith & Kristyn Getty", duration: "4:12", image: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "10,000 Reasons", artist: "Matt Redman", duration: "5:42", image: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, title: "Good Good Father", artist: "Chris Tomlin", duration: "4:56", image: "https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, title: "What A Beautiful Name", artist: "Hillsong Worship", duration: "5:05", image: "https://images.pexels.com/photos/3841302/pexels-photo-3841302.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, title: "Oceans", artist: "Hillsong United", duration: "8:56", image: "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, title: "Great Are You Lord", artist: "All Sons & Daughters", duration: "4:48", image: "https://images.pexels.com/photos/3944097/pexels-photo-3944097.jpeg?auto=compress&cs=tinysrgb&w=600" },
]

// Mock data for playlists
const devotionalPlaylists = [
  { id: 1, title: "Morning Worship", songs: 12, image: "https://images.pexels.com/photos/775199/pexels-photo-775199.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, title: "Peaceful Meditation", songs: 8, image: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "Sunday Praise", songs: 15, image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "Scripture Songs", songs: 10, image: "https://images.pexels.com/photos/460295/pexels-photo-460295.jpeg?auto=compress&cs=tinysrgb&w=600" },
]

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Play a song
  const playSong = (song: any) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  // Toggle play/pause
  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  // Filter songs based on search query
  const filteredSongs = devotionalSongs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col space-y-6">
        {/* Search and Tabs */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <h1 className="text-3xl font-bold">Devotional Music</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search songs or artists..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="songs" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="songs">Songs</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          
          {/* Songs Tab */}
          <TabsContent value="songs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSongs.map((song) => (
                <Card key={song.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square relative group">
                    <Image
                      src={song.image}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-12 w-12"
                        onClick={() => playSong(song)}
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{song.title}</h3>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Playlists Tab */}
          <TabsContent value="playlists" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {devotionalPlaylists.map((playlist) => (
                <Card key={playlist.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-square relative group">
                    <Image
                      src={playlist.image}
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-12 w-12"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold truncate">{playlist.title}</h3>
                    <p className="text-sm text-muted-foreground">{playlist.songs} songs</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="overflow-hidden border-dashed">
                <div className="aspect-square flex items-center justify-center bg-muted/40">
                  <Button variant="ghost" className="h-20 w-20 rounded-full">
                    <Plus className="h-10 w-10 text-muted-foreground" />
                  </Button>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold">Create New Playlist</h3>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Favorites Tab */}
          <TabsContent value="favorites" className="min-h-[300px] flex items-center justify-center">
            <div className="text-center p-8">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Favorites Yet</h3>
              <p className="text-muted-foreground mb-4">
                Start adding songs you love to your favorites
              </p>
              <Button asChild variant="outline">
                <a href="#songs">Browse Songs</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Music Player */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-3 z-10">
          <div className="container mx-auto flex items-center gap-4">
            <div className="flex items-center flex-1 min-w-0">
              <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0 mr-3">
                <Image
                  src={currentSong.image}
                  alt={currentSong.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium truncate">{currentSong.title}</h4>
                <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Button size="icon" variant="ghost" className="hidden md:flex">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={togglePlayback} className="h-9 w-9 rounded-full">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button size="icon" variant="ghost" className="hidden md:flex">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
            <div className="hidden md:flex items-center gap-2 w-1/4 max-w-xs">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider defaultValue={[70]} max={100} step={1} className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}