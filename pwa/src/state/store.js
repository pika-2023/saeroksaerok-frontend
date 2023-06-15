import { create } from "zustand";
import { RECORD_METHOD } from "../components/Modal/modalData";

const useStore = create((set) => ({
  // MARK: Splash
  isSplashOpen: true,
  setIsSplashOpen: () =>
    set((state) => ({ isSplashOpen: !state.isSplashOpen })),

  // MARK: Word
  keyword: "",
  setKeyword: (state) => set({ keyword: state }),

  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  isOpenModal: false,
  setIsOpenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),

  modalData: RECORD_METHOD,
  setModalData: (state) => set({ modalData: state }),

  // MARK: VoiceRecord
  audioUrl: "",
  setAudioUrl: (state) => set({ audioUrl: state }),

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

  // MARK: Feed
  myFeed: [],
  setMyFeed: (state) => set({ myFeed: state }),

  friendsFeed: [],
  setFriendsFeed: (state) => set({ friendsFeed: state }),

  currentMemory: 0,
  setCurrentMemory: (state) => set({ currentMemory: state }),

  detailData: "",
  setDetailData: (state) => set({ detailData: state }),

  feedDetailData: [],
  removeFeedDetailData: () => set({ feedDetailData: [] }),

  commentType: [],
  removeCommentType: () => set({ commentType: [] }),

  commentTypeModal: false,
  setCommentTypeModal: (state) => set({ commentTypeModal: state }),

  isVisible: true,
  setIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
}));

export default useStore;
