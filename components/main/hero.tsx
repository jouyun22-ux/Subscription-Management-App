"use client";

import { SparklesText } from "@/components/ui/sparkles-text";

const services = ["Works", "App UX/UI"];

export function Hero() {
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground">Portfolio</h3>
      {services.map((service, index) => (
        <SparklesText
          key={index}
          text={service}
          className="py-4 text-7xl font-black text-foreground"
          colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
          sparklesCount={8}
        />
      ))}
    </div>
  );
}
