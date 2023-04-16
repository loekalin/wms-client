import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export const addIssuingStore = create(
  devtools(
    persist(
      (set, get) => ({
        addData: (newData) => {
            set((state) => ({
              data: state.data ? [...state.data, newData] : [newData],
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
        name: "previewIssuing", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
