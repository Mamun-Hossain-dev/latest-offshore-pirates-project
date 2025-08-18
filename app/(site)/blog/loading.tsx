export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Loading */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-pulse">
            <div className="h-12 bg-cyan-200 dark:bg-cyan-800 rounded-lg mb-6 mx-auto w-3/4"></div>
            <div className="h-6 bg-cyan-100 dark:bg-cyan-900 rounded mb-4 mx-auto w-2/3"></div>
            <div className="h-6 bg-cyan-100 dark:bg-cyan-900 rounded mb-8 mx-auto w-1/2"></div>
            <div className="h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl mb-8 max-w-2xl mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-white/60 dark:bg-gray-900/60 rounded-xl border border-cyan-200 dark:border-cyan-800"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Loading */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto w-48"></div>
            <div className="w-24 h-1 bg-cyan-200 dark:bg-cyan-800 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-white/60 dark:bg-gray-900/60 rounded-xl border border-cyan-200 dark:border-cyan-800 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Categories Loading */}
      <section className="py-8 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-cyan-200 dark:bg-cyan-800 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid Loading */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto w-48"></div>
            <div className="w-24 h-1 bg-cyan-200 dark:bg-cyan-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-80 bg-white/60 dark:bg-gray-900/60 rounded-xl border border-cyan-200 dark:border-cyan-800 animate-pulse"
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-48 bg-white/60 dark:bg-gray-900/60 rounded-xl border border-cyan-200 dark:border-cyan-800 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
