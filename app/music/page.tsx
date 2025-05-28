"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Search } from "lucide-react"
import Image from "next/image"

const DEFAULT_MALAYALAM_QUERY = "malayalam Christian songs"

export default function MusicPage() {
  const [tracks, setTracks] = useState<any[]>([])
  const [playingTrack, setPlayingTrack] = useState<any>(null)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    // On mount, fetch popular Malayalam devotional songs
    fetchDefaultTracks()
    // Cleanup audio on unmount
    return () => { audio?.pause() }
    // eslint-disable-next-line
  }, [])

  const fetchDefaultTracks = async () => {
    setLoading(true)
    setSearched(false)
    const tokenRes = await fetch("/api/spotify-token", { method: "POST" })
    const { access_token } = await tokenRes.json()
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(DEFAULT_MALAYALAM_QUERY)}&type=track&limit=16`,
      { headers: { Authorization: `Bearer ${access_token}` } }
    )
    const data = await res.json()
    setTracks(data.tracks.items)
    setLoading(false)
  }

  const searchTracks = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    setTracks([])
    setSearched(true)
    // Get access token from your API route
    const tokenRes = await fetch("/api/spotify-token", { method: "POST" })
    const { access_token } = await tokenRes.json()
    // Search Spotify
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=12`,
      { headers: { Authorization: `Bearer ${access_token}` } }
    )
    const data = await res.json()
    setTracks(data.tracks.items)
    setLoading(false)
  }



  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Devotional Music</h1>
      <p className="text-center text-xs text-muted-foreground mb-6">Powered by Spotify</p>
      <form onSubmit={searchTracks} className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search for devotional songs or artists..."
            className="w-full pl-8 pr-4 py-2 rounded border bg-card"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded bg-primary text-primary-foreground font-semibold"
          disabled={loading}
        >
          Search
        </button>
      </form>
      {loading ? (
        <div className="text-center text-muted-foreground">Loading songs...</div>
      ) : (
        <>
          {!searched && (
            <h2 className="text-xl font-semibold mb-4 text-center">Popular Malayalam Devotional Songs</h2>
          )}
          {searched && tracks.length === 0 && (
            <div className="text-center text-muted-foreground">No results found.</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <Card key={track.id} className="overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
             
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold truncate">{track.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{track.artists[0]?.name}</div>
                  {!track.preview_url && (
                    <div className="mt-2">
                      {/* Fallback: Spotify iframe */}
                      <iframe
                        style={{ borderRadius: "8px" }}
                        src={`https://open.spotify.com/embed/track/${track.id}`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}