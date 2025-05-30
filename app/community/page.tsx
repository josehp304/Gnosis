"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users, Plus, MessageSquare, LockIcon, Globe, Search, Send,
  BookOpen, Heart, Clock, Headphones
} from "lucide-react"

// Group types
type GroupType = "community" | "prayer" | "counselling" | "study"

interface CommunityGroup {
  id: number
  name: string
  description: string
  members: number
  image: string | null
  isPrivate: boolean
  latestMessage: string
  type: GroupType
  isActive: boolean
  lastActivity: Date
  moderator?: string
}

// Mock data for community groups
const mockGroups: CommunityGroup[] = [
  // Jesus Youth Community Groups
  {
    id: 1,
    name: "Jesus Youth Teens Community",
    description: "A vibrant community for teenagers to grow in faith, share experiences, and support each other in their spiritual journey.",
    members: 320,
    image: null,
    isPrivate: false,
    latestMessage: "Hey everyone! Don't forget about our youth retreat this weekend. So excited to see you all there! 🙏✨",
    type: "community",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 19, 45),
    moderator: "Youth Leader Maria"
  },
  {
    id: 2,
    name: "Jesus Youth Campus Community",
    description: "Connect with fellow college students and young adults navigating faith in academic environments.",
    members: 100,
    image: null,
    isPrivate: false,
    latestMessage: "Finals week prayers needed! Let's support each other through this challenging time. God's got us! 📚🙏",
    type: "community",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 16, 30),
    moderator: "Campus Minister John"
  },
  {
    id: 3,
    name: "Jesus Youth Professionals",
    description: "A community for working professionals to integrate faith into their career and daily work life.",
    members: 40,
    image: null,
    isPrivate: false,
    latestMessage: "Great discussion on work-life balance and finding God in our daily tasks. Thanks for sharing your insights!",
    type: "community",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 14, 15),
    moderator: "Professional Mentor Sarah"
  },

  // Study Groups
  {
    id: 6,
    name: "Scripture Study Circle",
    description: "Deep dive into Biblical texts with guided discussions and theological insights for spiritual growth.",
    members: 45,
    image: null,
    isPrivate: false,
    latestMessage: "Tonight we're studying Romans 8. Come prepared with questions and an open heart! 📖✨",
    type: "study",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 20, 10),
    moderator: "Bible Scholar Fr. Michael"
  },
  {
    id: 7,
    name: "Catholic Catechism Study",
    description: "Explore the teachings of the Catholic Church through systematic study of the Catechism.",
    members: 28,
    image: null,
    isPrivate: false,
    latestMessage: "Great discussion on the Trinity today! Next week we'll cover the sacraments. See you there! 🙏",
    type: "study",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 19, 30),
    moderator: "Catechist Sister Mary"
  },

  // Prayer Circles
  {
    id: 4,
    name: "Prayer Circle",
    description: "Share your prayer requests and lift each other up in prayer. A sacred space for spiritual support and intercession.",
    members: 156,
    image: null,
    isPrivate: false,
    latestMessage: "Please pray for my grandmother's recovery. She's having surgery tomorrow morning. Thank you for your prayers! 🙏",
    type: "prayer",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 18, 20),
    moderator: "Prayer Coordinator Grace"
  },
  {
    id: 5,
    name: "Thanksgiving Circle",
    description: "Share your gratitude and celebrate God's blessings together. A place to give thanks and inspire others with testimonies.",
    members: 89,
    image: null,
    isPrivate: false,
    latestMessage: "Praise God! My job interview went amazingly well. Thank you all for your prayers. God is so good! 🙌✨",
    type: "prayer",
    isActive: true,
    lastActivity: new Date(2024, 0, 15, 17, 45),
    moderator: "Gratitude Leader Joy"
  }
]

// Counselling availability
const getCounsellingAvailability = () => {
  const now = new Date()
  const currentHour = now.getHours()
  const isAvailable = currentHour >= 10 && currentHour < 17
  const nextAvailable = isAvailable ? null : new Date(now.getFullYear(), now.getMonth(), now.getDate() + (currentHour >= 17 ? 1 : 0), 10, 0)

  return {
    isAvailable,
    nextAvailable,
    currentCounsellors: isAvailable ? 3 : 0,
    message: isAvailable
      ? "Counsellors are available now"
      : `Next available: ${nextAvailable?.toLocaleDateString()} at 10:00 AM`
  }
}

// Mock messages for the selected circle
const mockMessages = [
  { id: 1, text: "Welcome to our Prayer Warriors circle! How is everyone doing today?", user: { id: 1, name: "Sarah", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 30) },
  { id: 2, text: "Hello everyone! I'm doing well, thank you for asking. I have a prayer request for my mother who is going through some health challenges.", user: { id: 2, name: "David", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 35) },
  { id: 3, text: "I'll be praying for your mother, David. May God bring healing and comfort to her.", user: { id: 3, name: "Rebecca", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 40) },
  { id: 4, text: "Thank you, Rebecca. That means a lot to me and my family.", user: { id: 2, name: "David", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 45) },
  { id: 5, text: "Let's all take a moment to pray for David's mother and for anyone else who might be going through difficult times.", user: { id: 1, name: "Sarah", avatar: null }, timestamp: new Date(2023, 4, 15, 10, 50) },
]

export default function CommunityPage() {
  const [selectedGroup, setSelectedGroup] = useState<CommunityGroup | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [counsellingAvailability, setCounsellingAvailability] = useState(getCounsellingAvailability())
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    type: "community" as GroupType,
    isPrivate: false
  })

  // Update counselling availability every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCounsellingAvailability(getCounsellingAvailability())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  // Filter groups based on active tab and search query
  const getFilteredGroups = () => {
    let filtered = mockGroups

    // Filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter(group => group.type === activeTab)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered.sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime())
  }

  const filteredGroups = getFilteredGroups()

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // In a real app, this would send the message to the backend
    // For now, we'll just clear the input
    setNewMessage("")
  }

  // Handle creating a new group
  const handleCreateGroup = () => {
    // In a real app, this would create a new group in the database
    console.log("Creating group:", newGroup)
    setCreateDialogOpen(false)
    setNewGroup({
      name: "",
      description: "",
      type: "community",
      isPrivate: false
    })
  }

  // Handle starting counselling session
  const handleStartCounselling = () => {
    if (!counsellingAvailability.isAvailable) return

    // In a real app, this would connect to a counsellor
    console.log("Starting counselling session...")
    // For demo, we'll create a mock counselling "group"
    const counsellingSession: CommunityGroup = {
      id: 999,
      name: "Spiritual Counselling Session",
      description: "Private counselling session with a certified spiritual counsellor",
      members: 2,
      image: null,
      isPrivate: true,
      latestMessage: "Welcome! How can I support you in your spiritual journey today?",
      type: "counselling",
      isActive: true,
      lastActivity: new Date(),
      moderator: "Counsellor Sarah"
    }
    setSelectedGroup(counsellingSession)
  }

  // Get group type icon
  const getGroupTypeIcon = (type: GroupType) => {
    switch (type) {
      case "community": return <Users className="h-4 w-4" />
      case "prayer": return <Heart className="h-4 w-4" />
      case "counselling": return <Headphones className="h-4 w-4" />
      case "study": return <BookOpen className="h-4 w-4" />
      default: return <Users className="h-4 w-4" />
    }
  }

  // Get group type badge color
  const getGroupTypeBadge = (type: GroupType) => {
    switch (type) {
      case "community": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "prayer": return "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
      case "counselling": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "study": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h1 className="text-4xl font-crimson-bold text-foreground mb-2">Faith Community</h1>
            <p className="text-muted-foreground">Connect, study, pray, and grow together in faith</p>
          </div>
          <div className="flex gap-2 items-center w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search groups..."
                className="w-full pl-8 rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl hover:scale-105 transition-all duration-300">
                  <Plus className="h-4 w-4 mr-2" />
                  New Group
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-crimson-bold">Create a New Group</DialogTitle>
                  <DialogDescription>
                    Create a group to connect with others on similar spiritual journeys.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Group Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Prayer Partners"
                      value={newGroup.name}
                      onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="What is this group about?"
                      value={newGroup.description}
                      onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Group Type</Label>
                    <Select value={newGroup.type} onValueChange={(value: GroupType) => setNewGroup({ ...newGroup, type: value })}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select group type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="study">📖 Study Group</SelectItem>
                        <SelectItem value="prayer">🙏 Prayer Group</SelectItem>
                        <SelectItem value="community">👥 Community</SelectItem>
                        <SelectItem value="counselling">💬 Counselling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="private"
                      className="rounded text-primary focus:ring-primary"
                      checked={newGroup.isPrivate}
                      onChange={(e) => setNewGroup({ ...newGroup, isPrivate: e.target.checked })}
                    />
                    <Label htmlFor="private" className="cursor-pointer">Make this group private</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setCreateDialogOpen(false)} className="rounded-xl">Cancel</Button>
                  <Button onClick={handleCreateGroup} disabled={!newGroup.name.trim()} className="rounded-xl">Create Group</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Tabs for different group types */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 rounded-xl">
            <TabsTrigger value="all" className="rounded-xl">All Groups</TabsTrigger>
            <TabsTrigger value="study" className="rounded-xl">📖 Study</TabsTrigger>
            <TabsTrigger value="prayer" className="rounded-xl">🙏 Prayer</TabsTrigger>
            <TabsTrigger value="counselling" className="rounded-xl">💬 Counselling</TabsTrigger>
            <TabsTrigger value="community" className="rounded-xl">👥 Community</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {/* Counselling availability banner */}
            {activeTab === "counselling" && (
              <Card className="mb-6 sacred-glow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${counsellingAvailability.isAvailable ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                        <Headphones className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-crimson-bold text-lg">Spiritual Counselling</h3>
                        <p className="text-sm text-muted-foreground">
                          {counsellingAvailability.message}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Available 10:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={handleStartCounselling}
                      disabled={!counsellingAvailability.isAvailable}
                      className="rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      {counsellingAvailability.isAvailable ? 'Start Session' : 'Not Available'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Groups List */}
              <div className="lg:col-span-1">
                <Card className="h-full sacred-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-crimson-bold">
                      {getGroupTypeIcon(activeTab as GroupType)}
                      {activeTab === "all" ? "All Groups" :
                       activeTab === "study" ? "Study Groups" :
                       activeTab === "prayer" ? "Prayer Groups" :
                       activeTab === "counselling" ? "Counselling" : "Community Groups"}
                    </CardTitle>
                    <CardDescription>
                      {filteredGroups.length} {filteredGroups.length === 1 ? 'group' : 'groups'} available
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-3">
                        {filteredGroups.map((group) => (
                          <div
                            key={group.id}
                            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                              selectedGroup?.id === group.id
                                ? "bg-primary/10 border-primary/30 shadow-md"
                                : "hover:bg-muted/50 border-transparent hover:shadow-sm"
                            }`}
                            onClick={() => setSelectedGroup(group)}
                          >
                            <div className="flex items-start gap-3">
                              <Avatar className="h-10 w-10 flex-shrink-0">
                                <AvatarFallback className={`text-white ${
                                  group.type === 'study' ? 'bg-green-500' :
                                  group.type === 'prayer' ? 'bg-rose-500' :
                                  group.type === 'counselling' ? 'bg-purple-500' :
                                  group.type === 'community' ? 'bg-blue-500' : 'bg-gray-500'
                                }`}>
                                  {group.name.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-medium text-sm truncate">{group.name}</h3>
                                  {group.isPrivate && <LockIcon className="h-3 w-3 text-muted-foreground flex-shrink-0" />}
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className={`text-xs px-2 py-0.5 ${getGroupTypeBadge(group.type)}`}>
                                    {
                                     group.type === 'study' ? '📖 Study' :
                                     group.type === 'prayer' ? '🙏 Prayer' :
                                     group.type === 'counselling' ? '💬 Counselling' :
                                     group.type === 'community' ? '👥 Community' : '👥 Community'}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">{group.members} members</span>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                  {group.latestMessage}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-muted-foreground">
                                    {group.lastActivity.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                  {group.moderator && (
                                    <span className="text-xs text-primary font-medium">
                                      {group.moderator}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {filteredGroups.length === 0 && (
                          <div className="text-center py-12">
                            <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">No groups found</p>
                            <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or create a new group</p>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Chat Area */}
              <div className="lg:col-span-2">
                {selectedGroup ? (
                  <Card className="h-full flex flex-col sacred-card">
                    <CardHeader className="border-b bg-gradient-to-r from-sacred-light/50 to-background rounded-t-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className={`text-white ${
                              selectedGroup.type === 'study' ? 'bg-green-500' :
                              selectedGroup.type === 'prayer' ? 'bg-rose-500' :
                              selectedGroup.type === 'counselling' ? 'bg-purple-500' :
                              selectedGroup.type === 'community' ? 'bg-blue-500' : 'bg-gray-500'
                            }`}>
                              {selectedGroup.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-xl font-crimson-bold flex items-center gap-2">
                              {selectedGroup.name}
                              {selectedGroup.isPrivate ? (
                                <LockIcon className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Globe className="h-4 w-4 text-muted-foreground" />
                              )}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <span>{selectedGroup.members} members</span>
                              {selectedGroup.moderator && (
                                <>
                                  <span>•</span>
                                  <span className="text-primary">Moderated by {selectedGroup.moderator}</span>
                                </>
                              )}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${getGroupTypeBadge(selectedGroup.type)}`}>
                            {selectedGroup.type === 'study' ? '📖 Study' :
                             selectedGroup.type === 'prayer' ? '🙏 Prayer' :
                             selectedGroup.type === 'counselling' ? '💬 Counselling' :
                             selectedGroup.type === 'community' ? '👥 Community' : '👥 Community'}
                          </Badge>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            <Users className="h-4 w-4 mr-2" />
                            Members
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0">
                      <ScrollArea className="h-[500px] p-6">
                        <div className="space-y-6">
                          {mockMessages.map((message) => (
                            <div key={message.id} className="flex gap-3 animate-fade-in">
                              <Avatar className="h-9 w-9 mt-1 flex-shrink-0">
                                <AvatarFallback className="bg-primary/10 text-primary">
                                  {message.user.name.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-baseline gap-2 mb-1">
                                  <p className="font-medium text-sm text-foreground">{message.user.name}</p>
                                  <span className="text-xs text-muted-foreground">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </div>
                                <div className="bg-muted/30 rounded-xl p-3 max-w-md">
                                  <p className="text-sm leading-relaxed">{message.text}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="border-t bg-background/50 p-4 rounded-b-xl">
                      <form onSubmit={handleSendMessage} className="w-full flex gap-3">
                        <div className="flex-1 relative">
                          <Input
                            placeholder={`Message ${selectedGroup.name}...`}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="rounded-xl pr-12 bg-background"
                          />
                        </div>
                        <Button
                          type="submit"
                          size="icon"
                          disabled={!newMessage.trim()}
                          className="rounded-xl hover:scale-105 transition-all duration-300"
                        >
                          <Send className="h-4 w-4" />
                          <span className="sr-only">Send message</span>
                        </Button>
                      </form>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card className="h-full flex items-center justify-center p-8 sacred-card">
                    <div className="text-center max-w-md">
                      <div className="mb-6">
                        {activeTab === "counselling" ? (
                          <Headphones className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        ) : activeTab === "study" ? (
                          <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        ) : activeTab === "prayer" ? (
                          <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        ) : (
                          <MessageSquare className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        )}
                      </div>
                      <h2 className="text-2xl font-crimson-bold mb-3">
                        {activeTab === "counselling" ? "Select Counselling" :
                         activeTab === "study" ? "Join a Study Group" :
                         activeTab === "prayer" ? "Join Prayer Support" : "Select a Group"}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {activeTab === "counselling"
                          ? "Connect with certified spiritual counsellors for guidance and support in your faith journey."
                          : activeTab === "study"
                          ? "Dive deep into Scripture with fellow believers in structured study groups."
                          : activeTab === "prayer"
                          ? "Find prayer support and share requests with a caring community."
                          : "Choose a group from the list to start connecting with others on similar spiritual journeys."
                        }
                      </p>
                      {activeTab === "counselling" && !counsellingAvailability.isAvailable ? (
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                          <div className="flex items-center gap-2 text-orange-700">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">Counselling hours: 10:00 AM - 5:00 PM</span>
                          </div>
                        </div>
                      ) : null}
                      <Button
                        onClick={() => setCreateDialogOpen(true)}
                        className="rounded-xl hover:scale-105 transition-all duration-300"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Group
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}