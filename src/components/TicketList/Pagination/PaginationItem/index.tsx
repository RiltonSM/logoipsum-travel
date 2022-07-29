import { useDispatch } from "react-redux";

import { setPage } from "@/store/reducers/ticket";

import styles from "./styles.module.scss";

interface PaginationItemProps {
  currentPage: number,
  page: number
}

const PaginationItem = ({
  currentPage,
  page
}: PaginationItemProps) => {
  const dispatch = useDispatch();

  return(
    <button 
      onClick={() => dispatch(setPage(page))}
      className={`${styles.container} ${currentPage === page ? styles.active : ""}`}
    >
      {page}
    </button>
  )
}

export { PaginationItem }