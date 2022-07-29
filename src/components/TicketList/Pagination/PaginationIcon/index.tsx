import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setPage } from "@/store/reducers/ticket";

import styles from "./styles.module.scss";

interface PaginationIconProps {
  currentPage: number;
  total: number;
  children: ReactNode;
  type: "prev" | "forward";
}

const PaginationIcon = ({
  children,
  currentPage,
  total,
  type
}: PaginationIconProps) => {
  const [isDisabled, setIsDisabled] = useState(() => {
    if(currentPage === total && type === "forward"){
      return true;
    }

    if(currentPage === 1 && type === "prev"){
      return true;
    }

    return false;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if(currentPage === total && type === "forward"){
      setIsDisabled(true)
    } else if(currentPage === 1 && type === "prev"){
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [currentPage, total, type]);

  const handleIconClick = () => {
    if(type === "prev"){
      dispatch(setPage(currentPage - 1));
    } else {
      dispatch(setPage(currentPage + 1));
    }
  }

  return(
    <button 
      onClick={() => handleIconClick()}
      className={styles.container}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export { PaginationIcon }