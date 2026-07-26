import Skeleton from "./Skeleton";

export default function NavbarSkeleton() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Skeleton className="h-4 w-28 rounded" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
      </nav>
    </header>
  );
}
