export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-indigo-950 dark:to-violet-950">
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-8 w-48 bg-white/20 rounded-full animate-pulse mb-6 mx-auto"></div>
            <div className="h-16 w-3/4 bg-white/20 rounded-2xl animate-pulse mb-8 mx-auto"></div>
            <div className="flex items-center justify-center gap-8">
              <div className="h-6 w-32 bg-white/20 rounded-full animate-pulse"></div>
              <div className="h-6 w-32 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
              <div className="h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl animate-pulse"></div>
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-20 bg-indigo-100 dark:bg-indigo-900 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-200 to-violet-200 dark:from-indigo-800 dark:to-purple-800 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 w-20 bg-indigo-200 dark:bg-indigo-800 rounded-full animate-pulse mb-3"></div>
                <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="h-12 w-full bg-gradient-to-r from-indigo-200 to-violet-200 dark:from-indigo-800 dark:to-purple-800 rounded-xl animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
