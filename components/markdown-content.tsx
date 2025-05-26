'use client';

import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-em:text-muted-foreground">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-muted-foreground">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
