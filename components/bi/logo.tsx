import { NodumMark } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export function BiLogo({ className }: { className?: string }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5", className)}>
      <NodumMark className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-12deg]" />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-white">
        nod<span className="text-forest-400">um</span>
        <span className="ml-0.5 font-semibold text-body">BI</span>
      </span>
      <span className="sr-only">Nodum Business Intelligence — painel de indicadores financeiros</span>
    </span>
  );
}
