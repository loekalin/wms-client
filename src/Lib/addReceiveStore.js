import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export const addReceiveStore = create(
  devtools(
    persist(
      (set, get) => ({
        data: null,
        addData: (newData) => {
          set((state) => ({
            data: [...state.data, newData],
          }));
        },
        removeData: (index) => {
          set((state) => {
            const data = [...state.data];
            data.splice(index, 1);
            return { data };
          });
        },
      }),
      {
        name: "previewReceive", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
