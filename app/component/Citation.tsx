import React from 'react';

interface Citation {
  id: string;
  url: string;
  title: string;
  author?: string;
  publishedDate?: string;
  snippet: string;
}

interface CitationProps {
  citation: Citation;
}

const Citation: React.FC<CitationProps> = ({ citation }) => {
  return (
    <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200">
      <a 
        href={citation.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block space-y-2"
      >
        <h3 className="text-[15px] font-medium text-[var(--brand-default)] hover:text-[var(--brand-muted)] transition-colors">
          {citation.title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {citation.author && (
            <>
              <span>{citation.author}</span>
              <span>•</span>
            </>
          )}
          {citation.publishedDate && (
            <>
              <span>{new Date(citation.publishedDate).toLocaleDateString()}</span>
              <span>•</span>
            </>
          )}
          <span className="truncate">{citation.url}</span>
        </div>
        
        <p className="text-sm text-gray-700 line-clamp-2">
          {citation.snippet}
        </p>
      </a>
    </div>
  );
};

export default Citation; 