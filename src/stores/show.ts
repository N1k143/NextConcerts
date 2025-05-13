import { Show } from "@/@types/show"
import { Api } from "@/services/api";
import { create } from "zustand";

interface ShowStore {
    shows: Show[];
    isLoading: boolean;

    fetchShows: () => Promise<void>;

}

export const useShowStore = create<ShowStore>((set) => ({
    shows: [],
    isLoading: false,


    fetchShows: async () => {
        const shows = await Api.show.getAll();
        set({shows});
        set({isLoading: false})
    }
}))