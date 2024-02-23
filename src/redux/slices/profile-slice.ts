import { IGetCurrentUserProfileData, IGetUserInfoProfileData } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  currentUser: any
  userInfo: any
  accountList: any
  planHistory: any
  accumulationHistory: any
  features: any
  followers: any
  following: any
  setting: any
  referralInfo: any
  totalFollowers: number | null
  totalFollowing: number | null
  noteList: any
}

const initialState: ProfileState = {
  currentUser: null,
  userInfo: null,
  accountList: null,
  planHistory: null,
  accumulationHistory: null,
  features: null,
  followers: null,
  following: null,
  setting: null,
  referralInfo: null,
  totalFollowers: null,
  totalFollowing: null,
  noteList: []
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentUser: (
      state: ProfileState,
      action: PayloadAction<IGetCurrentUserProfileData>
    ) => {
      state.currentUser = action.payload
    },
    setUserInfo: (
      state: ProfileState,
      action: PayloadAction<IGetUserInfoProfileData>
    ) => {
      state.userInfo = action.payload
    },
    setAccountList: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.accountList = action.payload
    },
    setPlanHistory: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.planHistory = action.payload
    },
    setAccumulationHistory: (
      state: ProfileState,
      action: PayloadAction<any[]>
    ) => {
      state.accumulationHistory = action.payload
    },
    setFeatures: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.features = action.payload
    },
    setFollowers: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.followers = action.payload
    },
    setFollowing: (state: ProfileState, action: PayloadAction<any[]>) => {
      state.following = action.payload
    },
    setSetting: (state: ProfileState, action: PayloadAction<any>) => {
      state.setting = action.payload
    },
    setReferralInfo: (state: ProfileState, action: PayloadAction<any>) => {
      state.referralInfo = action.payload
    },
    setTotalFollowers: (state: ProfileState, action: PayloadAction<number>) => {
      state.totalFollowers = action.payload
    },
    setTotalFollowing: (state: ProfileState, action: PayloadAction<number>) => {
      state.totalFollowing = action.payload
    },
    setNoteList: (state: ProfileState, action: PayloadAction<any>) => {
      state.noteList = action.payload
    }
  }
})

export const {
  setCurrentUser,
  setUserInfo,
  setAccountList,
  setPlanHistory,
  setAccumulationHistory,
  setFeatures,
  setFollowers,
  setFollowing,
  setSetting,
  setReferralInfo,
  setTotalFollowers,
  setTotalFollowing,
  setNoteList
} = profileSlice.actions

export default profileSlice.reducer
