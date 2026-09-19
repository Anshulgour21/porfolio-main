export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
      </span>
      Open to Software Development Opportunities
    </div>
  );
}
