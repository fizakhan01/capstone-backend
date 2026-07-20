import { useContext } from "react";
import { MoodContext } from "../Context/MoodContext";
import { Navigate, useNavigate } from "react-router-dom";
import App from "../App";
import MoodCard from "../components/MoodCard";

function Moods(){
    const {SetMood}= useContext(MoodContext);
    const navigate = useNavigate();

    const HandleMood=(mood)=>{
      SetMood(mood);
      navigate("/songs");
    };

    
    return(
     <>
      
       <div className="mood-container">
          <MoodCard
           moodName="happy"
           emoji="😄"
           onSelect={HandleMood}
          />

           <MoodCard
           moodName="sad"
           emoji="😢"
           onSelect={HandleMood}
          />

          <MoodCard
           moodName="romantic"
           emoji="❤️"
           onSelect={HandleMood}
          />
        </div>
     </>
    );


};
export default Moods;