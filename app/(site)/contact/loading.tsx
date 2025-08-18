export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/30 via-blue-50/20 to-cyan-100/40 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-cyan-900/30">
      {/* Hero skeleton */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-600/10 border-b border-cyan-200/20">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-12 md:h-16 w-3/4 bg-gradient-to-r from-cyan-200/60 to-blue-200/60 rounded-lg animate-pulse mb-6 mx-auto" />
            <div className="h-6 w-full bg-cyan-100/60 rounded animate-pulse mb-2" />
            <div className="h-6 w-2/3 bg-cyan-100/60 rounded animate-pulse mx-auto" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column skeleton */}
          <div className="space-y-6">
            <div className="h-32 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-2xl animate-pulse" />
            <div className="h-32 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-2xl animate-pulse" />
            <div className="h-32 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-2xl animate-pulse" />
            <div className="h-64 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-xl animate-pulse" />
              <div className="h-20 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-xl animate-pulse" />
              <div className="h-20 bg-gradient-to-br from-cyan-100/60 to-blue-100/60 rounded-xl animate-pulse" />
            </div>
          </div>

          {/* Right column skeleton */}
          <div className="lg:pl-8">
            <div className="h-96 bg-gradient-to-br from-white/80 to-cyan-50/80 border border-cyan-200/50 rounded-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
