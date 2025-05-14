"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import { Show } from "@/@types/show";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  show: Show;
}

export const Showcard: React.FC<Props> = ({ className, show }) => {
  const router = useRouter(); 

  const handleClick = () => {
    if (!router) return; 
    router.push(`/shows/${show.id}/book`);
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer hover:shadow-md transition-all"
    >
      <CardContent className="text-center">
        <p>{show.date}</p>
        <CardTitle className="py-2 text-xl">{show.artist}</CardTitle>
        <p>{show.location}</p>
        <p className="mt-6">{show.start} - {show.end}</p>
      </CardContent>
    </Card>
  );
};
