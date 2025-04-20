import { WordCounterState, WordCounterActions, WordCounterActionType } from "@/types";

export const WordCounterReducer = (state: WordCounterState, action: WordCounterActions) => {
  const { type, payload } = action

  switch (type) {
    case WordCounterActionType.SET_TEXT:
      return {
        ...state,
        text: payload
      }
    
    case WordCounterActionType.SET_EXCLUDE_SPACES:
      return {
        ...state,
        options: {
          ...state.options,
          excludeSpaces: payload
        }
      }

    case WordCounterActionType.SET_CHARACTER_LIMIT:
      if (payload < 0) return state
      return {
        ...state,
        options: {
          ...state.options,
          characterLimit: payload
        }
      }
    
    default:
      return state
  }
}
