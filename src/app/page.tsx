'use client'
import { Filters } from "@/components/shared/filters";
import { Showcard } from "@/components/shared/show-card";
import { Showlist } from "@/components/shared/show-list";
import { Title } from "@/components/shared/title";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useShowStore } from "@/stores/show";
import { useEffect } from "react";



export default function Home() {
  const fetchShows = useShowStore((store) => store.fetchShows);
  useEffect(() => {
    fetchShows();
  }, [])
  
  return (
  <>
    <Title>Checkout these amazing concerts in Graz</Title>
    <Filters/>
    <Showlist/>
  </>
  );
}
