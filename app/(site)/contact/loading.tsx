export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Hero skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse mb-6 mx-auto" />
          <div className="h-6 w-full bg-muted rounded animate-pulse mb-2" />
          <div className="h-6 w-2/3 bg-muted rounded animate-pulse mx-auto" />
        </div>

        {/* Content skeleton */}
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="h-32 bg-muted rounded-2xl animate-pulse" />
            <div className="h-32 bg-muted rounded-2xl animate-pulse" />
            <div className="h-64 bg-muted rounded-2xl animate-pulse" />
          </div>
          <div>
            <div className="h-96 bg-muted rounded-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
