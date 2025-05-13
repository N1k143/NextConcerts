import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";



interface Props {
    className?: string;
}

export const Filters:React.FC<Props> = ({className}) => {
    return (
        <>
<div className={cn("flex gap-4 mt-4", className)}>
    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Artist" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Location" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

  <Input type="date"/>
</div>

        </>
    )
}