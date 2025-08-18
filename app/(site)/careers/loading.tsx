export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Loading */}
      <div className="relative min-h-[60vh] bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-cyan-950 dark:via-blue-950 dark:to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-pulse">
            <div className="h-16 bg-cyan-200/50 dark:bg-cyan-800/50 rounded-lg mb-6 mx-auto max-w-md"></div>
            <div className="h-6 bg-cyan-200/30 dark:bg-cyan-800/30 rounded mb-4 mx-auto max-w-2xl"></div>
            <div className="h-6 bg-cyan-200/30 dark:bg-cyan-800/30 rounded mb-8 mx-auto max-w-xl"></div>
            <div className="flex justify-center gap-6">
              <div className="h-4 w-20 bg-cyan-200/30 dark:bg-cyan-800/30 rounded"></div>
              <div className="h-4 w-20 bg-cyan-200/30 dark:bg-cyan-800/30 rounded"></div>
              <div className="h-4 w-20 bg-cyan-200/30 dark:bg-cyan-800/30 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Loading */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 animate-pulse">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto max-w-md"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-2xl"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-cyan-200 dark:bg-cyan-800 rounded-full mx-auto mb-4"></div>
                <div className="h-5 bg-cyan-200/50 dark:bg-cyan-800/50 rounded mb-2"></div>
                <div className="h-4 bg-cyan-200/30 dark:bg-cyan-800/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Path Loading */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-950/30">
        <div className="container px-4 md:px-6 animate-pulse">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto max-w-sm"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-md"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Loading */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 animate-pulse">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto max-w-sm"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto max-w-md"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 max-w-sm"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded max-w-xs"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Loading */}
      <div className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto animate-pulse">
            <div className="text-center mb-8">
              <div className="h-10 bg-cyan-200/50 dark:bg-cyan-800/50 rounded mb-4 mx-auto max-w-sm"></div>
              <div className="h-4 bg-cyan-200/30 dark:bg-cyan-800/30 rounded mx-auto max-w-lg"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 space-y-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 max-w-24"></div>
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
              <div className="h-12 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
