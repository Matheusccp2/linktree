"use client";

import { useState } from "react";
import { LinkItem } from "../data/links";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function LinkCard({ item, index }: LinkCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="animate-fadeUp"
      style={{ animationDelay: `${260 + index * 80}ms` }}
    >
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          "w-full h-auto rounded-xl border-zinc-700 bg-zinc-800/50 px-0 py-0",
          "text-left justify-start gap-0",
          "transition-all duration-300 ease-out",
          hovered && [
            "border-zinc-500",
            "bg-zinc-800",
            "shadow-lg shadow-violet-900/20",
            "-translate-y-[2px]",
          ]
        )}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card className="border-0 bg-transparent shadow-none w-full">
          <CardHeader className="p-4 flex-row items-center gap-4 space-y-0">
            <Badge
              variant="secondary"
              className={cn(
                "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                "text-base border-0 px-0 py-0",
                "transition-all duration-300",
                hovered
                  ? "bg-violet-600/20 text-violet-300 scale-110"
                  : "bg-zinc-700/60 text-zinc-300"
              )}
            >
              {item.icon}
            </Badge>
            <div className="flex-1 min-w-0">
              <CardTitle
                className={cn(
                  "text-sm font-semibold tracking-wide truncate",
                  "transition-colors duration-300",
                  hovered ? "text-white" : "text-zinc-200"
                )}
              >
                {item.label}
              </CardTitle>
              {item.description && (
                <CardDescription
                  className={cn(
                    "text-xs mt-0.5 truncate",
                    "transition-colors duration-300",
                    hovered ? "text-zinc-400" : "text-zinc-500"
                  )}
                >
                  {item.description}
                </CardDescription>
              )}
            </div>
            <span
              className={cn(
                "shrink-0 transition-all duration-300",
                hovered ? "text-violet-400 translate-x-1" : "text-zinc-300"
              )}
            >
              <ArrowIcon />
            </span>
          </CardHeader>
        </Card>
      </Button>
    </div>
  );
}
