"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Book, MessageCircle, Menu, Music, Users, UserCircle } from "lucide-react"
import { SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,} from "@clerk/nextjs"
const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/chat",
      label: "Chat",
      icon: MessageCircle,
      active: pathname === "/chat",
    },
    {
      href: "/music",
      label: "Music",
      icon: Music,
      active: pathname === "/music",
    },
    {
      href: "/community",
      label: "Community",
      icon: Users,
      active: pathname === "/community",
    },
    {
      href: "/bible",
      label: "Bible",
      icon: Book,
      active: pathname === "/bible",
    },
    {
      href: "/saints",
      label: "Saints",
      icon: UserCircle,
      active: pathname === "/saints",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="flex items-center gap-2 font-semibold text-xl" onClick={() => setIsOpen(false)}>
                  <span className="font-crimson">Gnosis</span>
                </Link>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      route.active 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted"
                    }`}
                  >
                    <route.icon className="w-5 h-5" />
                    <span>{route.label}</span>
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      Log in
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                      Sign up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 ml-5">
            <span className="font-crimson hidden md:inline-block text-xl font-semibold ">
              Gnosis
            </span>
            <span className="font-crimson md:hidden text-xl font-semibold">
              DG
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-5">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-1 text-sm transition-colors hover:text-primary ${
                  route.active ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                <route.icon className="w-4 h-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <div className="hidden sm:flex items-center gap-2">
            <SignedOut>
              <Button asChild variant="ghost" size="sm">
                <SignInButton />
              </Button>
              <Button asChild size="sm">
                <SignUpButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navigation