export function StickyHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 mb-4 w-screen  py-4 bg-slate-900/75 backdrop-blur">
      <h2
        className={
          "text-sm uppercase tracking-widest text-slate-200 font-bold lg:sr-only"
        }
      >
        {title}
      </h2>
    </div>
  );
}
