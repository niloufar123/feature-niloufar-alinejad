// src/store/useStore.ts
import { create } from "zustand";
import { POSTS } from "../constants/posts";
import { persist } from "zustand/middleware";
import { IPost } from "../types/Post";



interface StoreState {
  posts: IPost[];
  toggleLike: (id: number) => void;
  toggleMark: (id: number) => void;

}

export const useStore = create(
  persist(
    (set) => ({
      posts:POSTS,
      toggleLike: (id: number) =>
        set((state:any) => ({
          posts: state.posts.map((post:any) =>
            post.id === id ? { ...post, liked: !post.liked } : post
          )
        })),
        toggleMark: (id: number) =>
          set((state:any) => ({
            posts: state.posts.map((post:any) =>
              post.id === id ? { ...post, marked: !post.marked } : post
            )
          }),
      )
      
    }),
    {
      name: "user-Markes",
      partialize: (state) => ({
        posts: state.posts.filter((post:IPost) => post.marked),
      }),
      merge: (persistedState:any, currentState:any) =>({
        ...currentState,
        posts: currentState.posts.map((post:IPost) => ({
          ...post,
          marked: (persistedState as StoreState).posts.some(
            (marked) => marked.id === post.id),
        })),
      })
      },
  ),
)


// export default useStore;
