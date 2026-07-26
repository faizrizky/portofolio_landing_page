import Skeleton from "./Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
      <Skeleton className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="mt-4 h-6 w-3/4 rounded" />
        <Skeleton className="mt-3 h-4 w-full rounded" />
        <Skeleton className="mt-2 h-4 w-2/3 rounded" />
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}
