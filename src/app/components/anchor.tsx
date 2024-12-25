import { ArrowUpRight } from "lucide-react";

export function Anchor({ url, text }: { url: string; text: string }) {
  return (
    <div className={"flex gap-2 group"}>
      <a
        href={url}
        className={"text-slate-200 font-medium group-hover:text-teal-500"}
      >
        {text}
      </a>
      <ArrowUpRight
        className={
          "transition-all group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-teal-500"
        }
      />
    </div>
  );
}
