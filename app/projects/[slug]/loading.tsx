import NavbarSkeleton from "@/components/skeletons/Navbarskeleton";
import StatusBarSkeleton from "@/components/skeletons/Statusbarskeleton";
import Skeleton from "@/components/skeletons/Skeleton";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Skeleton className="h-4 w-40 rounded" />

        <div className="mt-6 flex items-center gap-3">
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        <Skeleton className="mt-4 h-8 w-3/4 rounded-lg sm:h-10" />
        <Skeleton className="mt-3 h-4 w-40 rounded" />

        <div className="mt-4 flex flex-wrap gap-1.5">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-36 rounded-full" />
        </div>

        <div className="mt-10 space-y-3">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-2/3 rounded" />
        </div>

        <div className="mt-12 space-y-6">
          <Skeleton className="h-3 w-24 rounded" />
          <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
        </div>
      </main>
      <StatusBarSkeleton />
    </>
  );
}
