'use client';

export default function HobbyDetailLoading() {
  return (
    <div role="status" aria-busy className="animate-pulse py-8 md:py-12">
      <span className="sr-only">취미 정보를 불러오는 중입니다</span>
      <div className="h-6 w-24 rounded-full bg-surface-100" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-[4/3] rounded-2xl bg-surface-100 lg:aspect-auto lg:min-h-[420px]" />
        <div className="space-y-4">
          <div className="h-10 w-2/3 rounded-lg bg-surface-100" />
          <div className="h-5 w-full rounded bg-surface-100" />
          <div className="h-5 w-5/6 rounded bg-surface-100" />
          <div className="grid grid-cols-2 gap-3 pt-8">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-[72px] rounded-xl bg-surface-100 ${index === 0 ? 'col-span-2' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-48 rounded-2xl bg-surface-100" />
        ))}
      </div>
    </div>
  );
}
