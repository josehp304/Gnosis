"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Users, Plus, MessageSquare, LockIcon, Globe, Search, Send } from "lucide-react"

// Mock data for community circles
const mockCircles = [
  {
    id: 1, 
    name: "Prayer Warriors", 
    description: "A group dedicated to praying for one another and the world.",
    members: 18,
    image: null,
    isPrivate: false,
    latestMessage: "Let's pray for those affected by the recent floods."
  },
  {
    id: 2, 
    name: "Bible Study Group", 
    description: "Weekly discussions on scripture and its application in daily life.",
    members: 24,
    image: null,
    isPrivate: false,
    latestMessage: "Tomorrow we'll be studying the book of John."
  },
  {
    id: 3, 
    name: "Worship Team", 
    description: "For those involved in music ministry and worship.",
    members: 12,
    image: null,
    isPrivate: true,
    latestMessage: "Practice session this Saturday at 5pm."
  },
  {
    id: 4, 
    name: "Young Adults", 
    description: "Faith discussions and community for ages 18-30.",
    members: 35,
    image: null,
    isPrivate: false,
    latestMessage: "Looking forward to our meetup this weekend!"
  },
]

// Mock messages for the selected circle
const mockMessages = [
  { id: 1, text: "Welcome to our Prayer Warriors circle! How is everyone doing today?", user: { id: 1, name: "Sarah", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 30) },
  { id: 2, text: "Hello everyone! I'm doing well, thank you for asking. I have a prayer request for my mother who is going through some health challenges.", user: { id: 2, name: "David", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 35) },
  { id: 3, text: "I'll be praying for your mother, David. May God bring healing and comfort to her.", user: { id: 3, name: "Rebecca", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 40) },
  { id: 4, text: "Thank you, Rebecca. That means a lot to me and my family.", user: { id: 2, name: "David", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 45) },
  { id: 5, text: "Let's all take a moment to pray for David's mother and for anyone else who might be going through difficult times.", user: { id: 1, name: "Sarah", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 50) },
]

export default function CommunityPage() {
  const [selectedCircle, setSelectedCircle] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [newCircle, setNewCircle] = useState({
    name: "",
    description: "",
    isPrivate: false
  })

  // Filter circles based on search query
  const filteredCircles = mockCircles.filter(circle => 
    circle.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    circle.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // In a real app, this would send the message to the backend
    // For now, we'll just clear the input
    setNewMessage("")
  }

  // Handle creating a new circle
  const handleCreateCircle = () => {
    // In a real app, this would create a new circle in the database
    console.log("Creating circle:", newCircle)
    setCreateDialogOpen(false)
    setNewCircle({
      name: "",
      description: "",
      isPrivate: false
    })
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <h1 className="text-3xl font-bold">Faith Community</h1>
          <div className="flex gap-2 items-center w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search circles..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Circle
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create a New Circle</DialogTitle>
                  <DialogDescription>
                    Create a circle to connect with others on similar spiritual journeys.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Circle Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Prayer Partners"
                      value={newCircle.name}
                      onChange={(e) => setNewCircle({ ...newCircle, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="What is this circle about?"
                      value={newCircle.description}
                      onChange={(e) => setNewCircle({ ...newCircle, description: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="private"
                      className="rounded text-primary focus:ring-primary"
                      checked={newCircle.isPrivate}
                      onChange={(e) => setNewCircle({ ...newCircle, isPrivate: e.target.checked })}
                    />
                    <Label htmlFor="private" className="cursor-pointer">Make this circle private</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleCreateCircle} disabled={!newCircle.name.trim()}>Create Circle</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Circles List */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Circles
                </CardTitle>
                <CardDescription>
                  Join a circle or start your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="space-y-4">
                    {filteredCircles.map((circle) => (
                      <div
                        key={circle.id}
                        className={`p-3 rounded-md cursor-pointer transition-colors ${
                          selectedCircle?.id === circle.id
                            ? "bg-primary/10"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => setSelectedCircle(circle)}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {circle.name.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium text-sm flex items-center">
                                {circle.name}
                                {circle.isPrivate && (
                                  <LockIcon className="h-3 w-3 ml-1 text-muted-foreground" />
                                )}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {circle.members} members
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs line-clamp-1 text-muted-foreground mt-1">
                          {circle.latestMessage}
                        </p>
                      </div>
                    ))}
                    {filteredCircles.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">No circles found</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-2">
            {selectedCircle ? (
              <Card className="h-full flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {selectedCircle.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg flex items-center gap-1">
                          {selectedCircle.name}
                          {selectedCircle.isPrivate ? (
                            <LockIcon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Globe className="h-4 w-4 text-muted-foreground" />
                          )}
                        </CardTitle>
                        <CardDescription>{selectedCircle.members} members</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Members
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {mockMessages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                            <AvatarFallback>
                              {message.user.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-baseline gap-2">
                              <p className="font-medium text-sm">{message.user.name}</p>
                              <span className="text-xs text-muted-foreground">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                            <p className="text-sm mt-1">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-t p-3">
                  <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h2 className="text-xl font-semibold mb-2">No Circle Selected</h2>
                  <p className="text-muted-foreground mb-6">
                    Select a circle from the list or create a new one to start chatting with others on a similar spiritual journey.
                  </p>
                  <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create a Circle
                      </Button>
                    </DialogTrigger>
                    {/* Dialog content is the same as above */}
                  </Dialog>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}