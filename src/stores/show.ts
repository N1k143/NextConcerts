import {create} from "zustand/react";
import {Show} from "@/@types/show";
import {Api} from "@/services/api";

interface ShowStore {
    shows: Show[];
    _shows: Show[];
    isLoading: boolean;
    artists: string[];
    locations: string[];

    getShowById: (id: number) => Show | undefined;
    fetchShows: () => Promise<void>;
    filterShows: (artist: string, location: string, date: string) => void;
}


export const useShowStore = create<ShowStore>((set, get) => ({
    shows: [],
    _shows: [],
    isLoading: false,
    artists: [],
    locations: [],


    fetchShows: async () => {
        set({ isLoading: true });
        const shows = await Api.show.getAll();
        set({ shows, _shows: shows });
        set ({ artists: [...new Set(shows.map((show) => show.artist))] });
        set ({ locations: [...new Set(shows.map((show) => show.location))] });
        set({ isLoading: false });
    },

    filterShows: (artist: string, location: string, date: string) => {
        let shows = [...get()._shows]
        if (artist) {
            shows = shows.filter((show) => show.artist === artist);
        }
        if (location) {
            shows = shows.filter((show) => show.location === location);
        }
        if (date) {
            shows = shows.filter((show) => show.date === new Date(date).toLocaleDateString());
        }
        set({ shows })
    },


    getShowById: (id: number) => {
        return get()._shows.find((show) => show.id === id);
    }

}));