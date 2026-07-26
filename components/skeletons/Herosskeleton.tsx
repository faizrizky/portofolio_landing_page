import Skeleton from "./Skeleton";

export default function HeroSkeleton() {
  return (
    <section className="relative scroll-mt-20">
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="glass max-w-2xl overflow-hidden rounded-3xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">whoami.sh</span>
          </div>
          <div className="px-6 py-8">
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="mt-4 h-10 w-64 rounded-lg sm:h-12 sm:w-80" />
            <Skeleton className="mt-3 h-5 w-40 rounded" />
            <Skeleton className="mt-6 h-4 w-full max-w-md rounded" />
            <Skeleton className="mt-2 h-4 w-3/4 max-w-sm rounded" />
            <Skeleton className="mt-4 h-3 w-32 rounded" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Skeleton className="h-10 w-36 rounded-full" />
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
