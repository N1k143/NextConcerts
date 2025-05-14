"use client";

import { ArtistCard } from "./components/artistcard";
import { PlaceShow } from "./components/placeshow";
import { SelectedPlaces } from "./components/selectedplaces";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { InputDetails } from "./components/inputdetails";
import { Booking } from "./components/booking";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Showcard } from "@/components/shared/show-card";
import { useShowStore } from "@/stores/show";
import { LoaderShows } from "@/components/shared/loader-shows"; // ✅ вот он

export default function BookShowPage() {
  const { getShowById } = useShowStore();
  const params = useParams<{ showId: string }>();
  const [isBooking, setBooking] = useState(false);

  const show = getShowById(Number(params.showId));

  return (
    <LoaderShows>
      {show ? (
        <Container className="py-8">
          <Title className="mb-4">Book seats for your show</Title>
          <Showcard show={show} />

          {!isBooking ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <PlaceShow className={""} />
              <SelectedPlaces showId={params.showId} className={""} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mt-6">
              <SelectedPlaces showId={params.showId} className={""} />
              <div className="border border-gray-950 p-4 shadow-sm">
                <h2 className="text-lg font-medium mb-4">
                  Please enter your details
                </h2>
                <div className="flex gap-4">
                  <InputDetails className={""} />
                  <div className="border-l border-gray-950 self-stretch"></div>
                  <Booking showId={params.showId} className={""} />
                </div>
              </div>
            </div>
          )}
        </Container>
      ) : (
        <div className="text-center py-10 text-gray-600 text-lg">
          Show not found
        </div>
      )}
    </LoaderShows>
  );
}
