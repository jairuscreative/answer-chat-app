interface MessageContentProps {
  content: string;
}

export default function MessageContent({ content }: MessageContentProps) {
  // Function to process the content and format links
  const formatContent = (text: string) => {
    // Regular expression to match markdown-style links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    
    // Split the text into parts (text and links)
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the formatted link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-default)] hover:underline"
        >
          {match[1]}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after last link
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return <>{formatContent(content)}</>;
} 