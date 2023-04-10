import { create } from "zustand";

export const useStore = create((set) => ({
  // store
  sidebarClicked: false,
  sidebarChildClicked: false,
  sidebarSecondChildClicked: false,
  // action
  toggleSidebar: () => set((state) => ({ sidebarClicked: !state.sidebarClicked })),
  toggleSidebarChild: () => set((state) => ({ sidebarChildClicked: !state.sidebarChildClicked })),
  toggleSidebarSecondChild: () => set((state) => ({ sidebarSecondChildClicked: !state.sidebarSecondChildClicked })),
}));
