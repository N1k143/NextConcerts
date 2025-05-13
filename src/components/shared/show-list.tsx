import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Showcard } from "./show-card";
import { useShowStore } from "@/stores/show";
import { Skeleton } from "../ui/skeleton";

interface Props {
    className?: string;
}

export const Showlist:React.FC<Props> = ({className}) => {
    const {shows, isLoading } = useShowStore();

    return (
        <>
            <div className={cn("grid grid-cols-4 gap-4 mt-4", className)}>
                {
                    isLoading ? 
                    [...new Array(10)].map((_, index) =>  <Skeleton key={index} className="w-[250px] h-[250px]"/>)
                    : shows.map((show) => <Showcard show={show} key={show.id}></Showcard>)
                }

            </div>
        </>
    )
}