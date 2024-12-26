export function StickyHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 mb-4 py-4 bg-slate-900/75 backdrop-blur lg:sr-only ">
      <h2
        className={"text-sm uppercase tracking-widest text-slate-200 font-bold"}
      >
        {title}
      </h2>
    </div>
  );
}
