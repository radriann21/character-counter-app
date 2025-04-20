/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WordCounterContextType {
  text: string,
  setText: (text:string) => void,
  options: {
    excludeSpaces: boolean,
    characterLimit: number
  },
  handleSetExcludeSpaces: (e: any) => void,
  handleSetCharacterLimit: (e: any) => void,
}

export enum WordCounterActionType {
  SET_TEXT = "SET_TEXT",
  SET_EXCLUDE_SPACES = "EXCLUDE_SPACES",
  SET_CHARACTER_LIMIT = "SET_CHARACTER_LIMIT"
}

export interface WordCounterState {
  text: string,
  options: {
    excludeSpaces: boolean,
    characterLimit: number
  }
}

export type WordCounterActions =
  | { type: WordCounterActionType.SET_TEXT; payload: string }
  | { type: WordCounterActionType.SET_EXCLUDE_SPACES; payload: boolean }
  | { type: WordCounterActionType.SET_CHARACTER_LIMIT; payload: number }