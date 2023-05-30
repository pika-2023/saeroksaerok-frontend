import { create } from "zustand";
import axios from "axios";

// MARK: 기본 사용법

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  myFeed: [],
  myFeedData: async () => {
    const result = await axios("/data/myFeedData.json");
    return result;
  },

  friendsFeed: [],
  friendsFeedData: async () => {
    const result = await axios("/data/friendsFeedData.json");
    return result;
  },

  feedDetailData: [],
  removeFeedDetailData: () => set({ feedDetailData: [] }),

  commentType: [],
  removeCommentType: () => set({ commentType: [] }),
}));

export default useStore;

// MARK: Redux Devtools 사용법

// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// const store = (set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// });

// const useStore = create(
//   process.env.NODE_ENV !== "production" ? devtools(store) : store
// );

// export default useStore;
