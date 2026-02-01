"use client";

import { ProfileData } from "../data/links";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  // Iniciais para o fallback do Avatar
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="flex flex-col items-center gap-4 animate-fadeUp"
      style={{ animationDelay: "0ms" }}
    >
      <div className="relative">
        {/* Anel animado (conic-gradient) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, #7c3aed 40%, transparent 60%, #7c3aed 90%)",
            animation: "spin 4s linear infinite",
          }}
        />
        {/* Avatar do shadcn — tamanho 36 (144px) */}
        <Avatar
          className={cn(
            "relative z-10 w-36 h-36",
            "ring-[3px] ring-zinc-900", // anel interno para separar do glow
          )}
        >
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback className="bg-zinc-700 text-violet-300 text-2xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      {/* Nome */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-white tracking-tight">
          {profile.name}
        </h1>
        <Badge
          variant="outline"
          className="mt-1.5 border-zinc-700 text-zinc-500 font-mono text-[11px] hover:bg-transparent"
        >
          {profile.handle}
        </Badge>
      </div>
      {/* Bio */}
      <p className="text-xs text-zinc-400 text-center leading-relaxed max-w-[260px]">
        {profile.bio} 
        <br></br>
        {profile.local}
      </p>
      <Separator className="bg-zinc-700/50 max-w-[200px]" />
    </div>
  );
}
