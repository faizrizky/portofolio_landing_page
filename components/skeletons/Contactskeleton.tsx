import Skeleton from "./Skeleton";

export default function ContactSkeleton() {
  return (
    <div className="flex flex-wrap gap-4">
      <Skeleton className="h-11 w-48 rounded-full" />
      <Skeleton className="h-11 w-24 rounded-full" />
      <Skeleton className="h-11 w-28 rounded-full" />
    </div>
  );
}
