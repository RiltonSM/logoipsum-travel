import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

interface BuildingTypeButtonProps {
  iconSrc: string;
  name: string;
  quantity: number;
}

const BuildingTypeButton = ({
  iconSrc,
  name,
  quantity
}: BuildingTypeButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const clearFilter = useSelector((state: any) => state.ticket.clearFilter)

  useEffect(() => {
    if(clearFilter){
      setIsSelected(false)
    }
  }, [clearFilter])

  const handleClick = useCallback(() => {
    return setIsSelected((oldState) => {
      return !oldState
    });
  }, []);

  const imgSrc = useMemo(() => {
    if(!isSelected){
      return iconSrc;
    }

    const [name, extension] = iconSrc.split(".");

    const activeName = `${name}Active.${extension}`;

    return activeName;
  }, [iconSrc, isSelected]);

  return(
    <button className={`${styles.container} ${isSelected ? styles.selected : ""}`} onClick={handleClick}>
      <img src={imgSrc} alt={name}/>
      <span className="paragraph3">{name} ({quantity})</span>
    </button>
  )
}

export { BuildingTypeButton }