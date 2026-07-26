import Skeleton from "./Skeleton";

export default function StatusBarSkeleton() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-3 w-40 rounded" />
        <Skeleton className="h-3 w-32 rounded" />
      </div>
    </footer>
  );
}