import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import { Show } from "@/@types/show";

interface Props {
    className?: string;
    show: Show;
}

export const Showcard:React.FC<Props> = ({className, show}) => {
    return (
        <>
                <Card>
                    <CardContent className="text-center">
                    <p>{show.date}</p>
                    <CardTitle className="py-2 text-xl">{show.artist}</CardTitle>
                    <p>{show.location}</p>
                    <p className="mt-6">{show.start}-{show.end}</p>
                    </CardContent>
                </Card>
        </>
    )
}