"use client"

import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      {/* Decorative sacred pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute top-2 left-8 w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-2 right-8 w-6 h-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Main brand */}
          <div className="flex items-center gap-2">
            <span className="font-crimson text-2xl font-semibold text-primary">
              Gnosis
            </span>
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="h-px bg-border flex-1"></div>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          {/* Made with love message */}
          <p className="text-sm text-muted-foreground font-medium">
            Made with{" "}
            <Heart className="inline-block w-4 h-4 text-red-500 fill-current mx-1" />
            {" "}by{" "}
            <Link 
              href="https://www.linkedin.com/in/dariogeorge21/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-semibold underline decoration-2 underline-offset-2 hover:decoration-accent"
            >
              Dario
            </Link>
            {" "}and{" "}
            <Link 
              href="https://www.linkedin.com/in/joseph304/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-semibold underline decoration-2 underline-offset-2 hover:decoration-accent"
            >
              Joseph
            </Link>
          </p>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-2">
            © 2025 Gnosis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;