export function SkeletonBubble () {
    return (
        <div className="flex items-start mb-3">
            {/* Avatar skeleton */}
        <div className="w-8 h-8 rounded-full"
   
        {/* Lineas skeleton - simulan texto cargando */}
      <div className="space-y-2 max-w-[60%]">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-48" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-36" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
      </div>
    </div>
  );
}
