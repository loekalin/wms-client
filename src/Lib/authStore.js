import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export const authStore = create(
  devtools(
    persist(
      (set, get) => ({
        users: null,
        isLoggedIn: false,
        doLogin: (user) => {
          set({ users: [user], isLoggedIn: true });
          // set({ users: [user], isLoggedIn: true });
          document.cookie = `token=${user.token}`;
        },
      }),
      {
        name: "token_login", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
