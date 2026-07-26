export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      {/* hero skeleton */}
      <div className="glass max-w-2xl animate-pulse overflow-hidden rounded-3xl">
        <div className="h-11 border-b border-white/10 bg-white/5" />
        <div className="space-y-4 px-6 py-8">
          <div className="h-3 w-20 rounded bg-white/10" />
          <div className="h-10 w-48 rounded bg-white/10" />
          <div className="h-4 w-40 rounded bg-white/10" />
          <div className="mt-2 h-3 w-full max-w-md rounded bg-white/10" />
          <div className="h-3 w-full max-w-sm rounded bg-white/10" />
          <div className="mt-6 flex gap-3">
            <div className="h-10 w-36 rounded-full bg-white/10" />
            <div className="h-10 w-32 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* project grid skeleton */}
      <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass animate-pulse overflow-hidden rounded-2xl">
            <div className="aspect-[16/10] w-full bg-white/5" />
            <div className="space-y-3 p-6">
              <div className="h-4 w-16 rounded-full bg-white/10" />
              <div className="h-5 w-3/4 rounded bg-white/10" />
              <div className="h-3 w-full rounded bg-white/10" />
              <div className="h-3 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
