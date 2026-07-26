import Skeleton from "./Skeleton";

export default function AboutSkeleton() {
  return (
    <div className="max-w-2xl space-y-3">
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-5/6 rounded" />
      <Skeleton className="h-4 w-2/3 rounded" />
    </div>
  );
}
