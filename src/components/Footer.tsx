import { Copyright } from "lucide-react";
import { ProfileData } from "../data/links.tsx";
import { cn } from "../lib/utils";

interface FooterProps {
  profile: ProfileData;
  animationDelay: number;
}

export default function Footer({ profile, animationDelay }: FooterProps) {
  return (
    <footer
      className={cn("animate-fadeUp mt-2 text-center")}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <p className="flex items-center justify-center gap-2 text-zinc-600 text-[11px] font-mono tracking-widest uppercase">
        <Copyright size={13} />
        Feito por {profile.name.split(" ")[0]}. {new Date().getFullYear()}
      </p>
    </footer>
  );
}
