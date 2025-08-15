export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-indigo-950 dark:to-violet-950 relative">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/2 bg-indigo-100 dark:bg-indigo-900 rounded" />
          <div className="h-4 w-2/3 bg-indigo-100 dark:bg-indigo-900 rounded" />
          <div className="h-64 w-full bg-indigo-100 dark:bg-indigo-900 rounded" />
        </div>
      </div>
    </div>
  )
}