import { createContext,useState } from "react";
export const MoodContext = createContext();
export const MoodProvider =({children}) => {
    const [Mood,SetMood]= useState("");
    return(
        <MoodContext.Provider value ={{Mood ,SetMood}}>{children}</MoodContext.Provider>
    );
};