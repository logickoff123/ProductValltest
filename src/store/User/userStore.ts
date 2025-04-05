// положить сюда userID либо в LC(localStorage)

import { create } from 'zustand'

interface UserStore {
    userId: number | null;
    setUserId: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    userId: null,
    setUserId: (id) => set({ userId: id }),
}));