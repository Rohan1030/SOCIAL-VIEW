export default function SocialBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Heart */}
      <svg className="absolute top-[15%] left-[8%] w-16 h-16 text-pink-500/10 animate-float-slow" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      
      {/* Twitter Bird / Chat */}
      <svg className="absolute top-[25%] right-[10%] w-24 h-24 text-blue-400/10 animate-float" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4.01c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C17.9 2.5 16.8 2 15.61 2c-2.28 0-4.14 1.86-4.14 4.14 0 .32.04.64.11.95-3.45-.17-6.5-1.82-8.55-4.33-.36.61-.56 1.33-.56 2.08 0 1.44.73 2.71 1.84 3.45-.7-.02-1.36-.21-1.93-.53v.05c0 2.07 1.47 3.79 3.43 4.18-.35.09-.71.14-1.08.14-.27 0-.53-.02-.79-.07.54 1.7 2.12 2.93 3.99 2.96-1.46 1.15-3.3 1.83-5.3 1.83-.33 0-.66-.02-.99-.06 1.89 1.21 4.13 1.92 6.53 1.92 7.84 0 12.13-6.49 12.13-12.13 0-.18 0-.37-.01-.55.83-.6 1.56-1.36 2.13-2.2z"/>
      </svg>
      
      {/* Retweet / Refresh */}
      <svg className="absolute bottom-[20%] left-[15%] w-20 h-20 text-emerald-500/10 animate-float-delayed" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
      
      {/* Like / Thumbs Up */}
      <svg className="absolute bottom-[35%] right-[15%] w-16 h-16 text-indigo-500/10 animate-float" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
      </svg>
      
      {/* Share Node */}
      <svg className="absolute top-[45%] left-[5%] w-12 h-12 text-purple-500/10 animate-float-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      
      {/* Hashtag */}
      <svg className="absolute top-[55%] right-[4%] w-16 h-16 text-yellow-500/10 animate-float-delayed" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
      
      {/* Camera / Insta */}
      <svg className="absolute bottom-[5%] left-[45%] w-[88px] h-[88px] text-orange-500/10 animate-float-slow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </div>
  );
}
