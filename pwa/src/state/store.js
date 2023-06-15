import { create } from "zustand";
import axios from "axios";
import { RECORD_AUDIO } from "../pages/Word/VoiceRecord/voiceRecordData";
import { RECORD_METHOD } from "../components/Modal/modalData";

const useStore = create((set) => ({
  // MARK: sample state
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  // MARK: Splash
  isSplashOpen: true,
  setIsSplashOpen: () =>
    set((state) => ({ isSplashOpen: !state.isSplashOpen })),

  // MARK: Feed
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

  detailData: "",
  setDetailData: (state) => set({ detailData: state }),

  feedDetailData: [],
  removeFeedDetailData: () => set({ feedDetailData: [] }),

  commentType: [],
  removeCommentType: () => set({ commentType: [] }),

  commentTypeModal: false,
  setCommentTypeModal: (state) => set({ commentTypeModal: state }),

  // MARK: Word
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  isOpenModal: false,
  setIsOpenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),

  voiceRecordData: RECORD_AUDIO,
  setVoiceRecordData: (state) => set({ voiceRecordData: state }),

  modalData: RECORD_METHOD,
  setModalData: (state) => set({ modalData: state }),

  // MARK: VoiceRecord
  audioUrl: null,
  setAudioUrl: (state) => set({ audioUrl: state }),

  disabled: true,
  setDisabled: (state) => set({ disabled: state }),

  keyword: "",
  setKeyword: (state) => set({ keyword: state }),

  audioData: [],
  setAudioData: (state) => set({ audioData: state }),

  isRecording: false,
  setIsRecording: () => set((state) => ({ isRecording: !state.isRecording })),

  recorder: "",
  setRecorder: (state) => set({ recorder: state }),

  page: "first",
  setPage: (state) => set({ page: state }),

  // MARK: Result
  textDiary: "",
  setTextDiary: (state) => set({ textDiary: state }),

  pictureDiary: "",
  setPictureDiary: (state) => set({ pictureDiary: state }),
}));

export default useStore;
