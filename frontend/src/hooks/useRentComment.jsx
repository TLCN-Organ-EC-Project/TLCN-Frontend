import { create } from 'zustand';

const useRentComment = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));



export default useRentComment;