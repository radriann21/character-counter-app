/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  WordCounterActionType,
  WordCounterContextType,
  WordCounterState,
} from "@/types";
import { createContext, useContext, useReducer } from "react";
import { WordCounterReducer } from "./WordCounterReducer";

export const WordCounterContext = createContext<WordCounterContextType>({
  text: "",
  setText: () => {},
  options: {
    excludeSpaces: false,
    characterLimit: Infinity,
  },
  handleSetExcludeSpaces: () => {},
  handleSetCharacterLimit: () => {},
});

const initialState: WordCounterState = {
  text: "",
  options: {
    excludeSpaces: false,
    characterLimit: Infinity,
  },
};

export const WordCounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(WordCounterReducer, initialState);

  const setText = (text: string) => {
    dispatch({ type: WordCounterActionType.SET_TEXT, payload: text });
  };

  const handleSetExcludeSpaces = (e: any) => {
    dispatch({
      type: WordCounterActionType.SET_EXCLUDE_SPACES,
      payload: e.checked,
    });
  };

  const handleSetCharacterLimit = (e:any) => {
    const limit = +e.target.value

    if (isNaN(limit) || limit < 1) return

    dispatch({
      type: WordCounterActionType.SET_CHARACTER_LIMIT,
      payload: e.target.value
    })
  }

  return (
    <WordCounterContext.Provider
      value={{ text: state.text, setText, options: state.options, handleSetExcludeSpaces, handleSetCharacterLimit }}
    >
      {children}
    </WordCounterContext.Provider>
  );
};

export const useWordCounter = () => {
  const context = useContext(WordCounterContext);
  if (!context) {
    throw new Error("useWordCounter must be used within a WordCounterProvider");
  }
  return context;
};
