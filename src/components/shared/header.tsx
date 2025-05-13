import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    className?: string;
}

export const Header:React.FC<Props> = ({className}) => {
    return (
        <div className={cn("bg-rose-800 p-2 text-amber-50", className)}>
            <Container className="flex items-center justify-between">
                <div>
                    <Link href="/">EuroSkills Concerts</Link>
                </div>
                <div>
                    <span>Alredy bocked?</span>
                    <Button className="ml-4" variant="ghost" asChild>
                        <Link href="/">Get Tickets</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}