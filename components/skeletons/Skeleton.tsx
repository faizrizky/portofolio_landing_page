export default function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`Skeleton ${className}`} aria-hidden="true" />;
}
