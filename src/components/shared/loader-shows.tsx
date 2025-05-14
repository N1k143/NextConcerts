"use client";
import { useShowStore } from "@/stores/show";
import { useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const LoaderShows: React.FC<Props> = ({ className, children }) => {
  const { fetchShows, isLoading } = useShowStore();
  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div className="flex justify-center">
      {isLoading ? <ClimbingBoxLoader color="#ff002f" /> : children}
    </div>
  );
};