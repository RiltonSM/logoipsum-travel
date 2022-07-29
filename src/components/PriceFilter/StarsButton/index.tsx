import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { getRandomInt } from "@/utils/randomNumber";

import styles from "./styles.module.scss";

interface StarsButtonProps {
    stars: number;
    reviews: number;
}

const StarsButton = ({ reviews, stars }: StarsButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const clearFilter = useSelector((state: any) => state.ticket.clearFilter)

  useEffect(() => {
    if(clearFilter){
      setIsSelected(false)
    }
  }, [clearFilter])

  const handleClick = useCallback(() => {
    setIsSelected((oldState) => {
      return !oldState;
    })
  }, [])

  const starsGenerator = useCallback(() => {
    const starsIcons = [];

    for(let i = 0; i < stars; i++){
      starsIcons.push(
        <FaStar key={`star_${getRandomInt()}`} size={24} color="#FFAD0D"/>
      )
    }

    return starsIcons;
  }, [stars]);

  return(
      <button 
          className={`${styles.container} ${isSelected && styles.selected}`}
          onClick={handleClick}
      >
          { starsGenerator() }

          <p className="paragraph3">({reviews})</p>
      </button>
  )
}

export { StarsButton }