import { cn } from "../lib/utils";

export default function Background() {
  return (
    <>
      {/* Orb – topo esquerda */}
      <div
        className={cn(
          "absolute rounded-full blur-[70px] pointer-events-none",
          "top-[-120px] left-[-100px] w-[420px] h-[420px]",
          "bg-orb-violet"
        )}
      />

      {/* Orb – bottom right */}
      <div
        className={cn(
          "absolute rounded-full blur-[70px] pointer-events-none",
          "bottom-[-80px] right-[-100px] w-[420px] h-[420px]",
          "bg-orb-blue"
        )}
      />

      {/* Noise overlay */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none opacity-[0.03]",
          "bg-noise"
        )}
      />
    </>
  );
}
