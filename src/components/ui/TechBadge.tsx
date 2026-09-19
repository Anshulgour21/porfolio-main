export function TechBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted transition-colors hover:bg-border hover:text-foreground">
      {text}
    </span>
  );
}
