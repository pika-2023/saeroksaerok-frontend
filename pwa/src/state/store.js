import { create } from "zustand";
import axios from "axios";
import { RECORD_AUDIO } from "../pages/Word/VoiceRecord/voiceRecordData";
import { RECORD_METHOD } from "../components/Modal/modalData";

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
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  voiceRecordData: RECORD_AUDIO,
  setVoiceRecordData: (state) => set({ voiceRecordData: state }),

  modalData: RECORD_METHOD,
  setModalData: (state) => set({ modalData: state }),

  // voiceRecord state
  stream: null,
  setStream: (state) => set({ stream: state }),

  media: null,
  setMedia: (state) => set({ media: state }),

  onRec: true,
  setOnRec: (state) => set({ onRec: state }),

  source: null,
  setSource: (state) => set({ source: state }),

  analyser: null,
  setAnalyser: (state) => set({ analyser: state }),

  audioUrl: null,
  setAudioUrl: (state) => set({ audioUrl: state }),

  disabled: true,
  setDisabled: (state) => set({ disabled: state }),
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
