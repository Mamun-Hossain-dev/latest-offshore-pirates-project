export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Loading Section */}
      <div className="relative bg-gradient-to-br from-blue-800 via-cyan-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="h-12 md:h-16 bg-white/20 animate-pulse rounded-lg mb-6 mx-auto max-w-2xl" />
            <div className="h-6 md:h-8 bg-white/15 animate-pulse rounded-lg mb-8 mx-auto max-w-3xl" />
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-white/10 animate-pulse rounded-full"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Loading */}
      <div className="sticky top-[56px] z-30 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <div className="h-10 bg-muted animate-pulse rounded-md" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-20 bg-muted animate-pulse rounded-full" />
              <div className="h-10 w-20 bg-muted animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Loading */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Loading */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="h-8 w-48 bg-muted animate-pulse rounded-md mb-2" />
              <div className="h-5 w-32 bg-muted animate-pulse rounded-md" />
            </div>
          </div>

          {/* Cards Loading */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-cyan-200 to-blue-300 animate-pulse" />

                {/* Content placeholder */}
                <div className="p-6">
                  <div className="h-6 bg-muted animate-pulse rounded-md mb-3" />
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted animate-pulse rounded-md" />
                    <div className="h-4 bg-muted animate-pulse rounded-md w-3/4" />
                    <div className="h-4 bg-muted animate-pulse rounded-md w-1/2" />
                  </div>
                  <div className="h-10 bg-gradient-to-r from-cyan-300 to-blue-400 animate-pulse rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Loading */}
      <div className="bg-gradient-to-r from-sky-300 to-blue-700">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-10 bg-white/20 animate-pulse rounded-lg mb-4 mx-auto max-w-lg" />
            <div className="h-6 bg-white/15 animate-pulse rounded-lg mb-8 mx-auto max-w-2xl" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 w-48 bg-white/20 animate-pulse rounded-full" />
              <div className="h-12 w-40 bg-white/20 animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
