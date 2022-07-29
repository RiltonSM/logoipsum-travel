
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPriceFilter } from "@/store/reducers/ticket";

import { convertNumberToCurrency } from "@/utils/convertNumberToCurrency";

import styles from "./styles.module.scss";

interface PriceIntervalButtonProps {
  min: number;
  max: number;
}

const PriceIntervalButton = ({ max, min }: PriceIntervalButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const clearFilter = useSelector((state: any) => state.ticket.clearFilter)
  const priceFilter = useSelector((state: any) => state.ticket.priceFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if(clearFilter && isSelected){
      dispatch(setPriceFilter({
        max: 0,
        min: 0
      }));
      setIsSelected(false)
    }
  }, [clearFilter, dispatch, isSelected])


  const handleClickButton = useCallback(() => {
    if(priceFilter.max === max && priceFilter.min === min){
      dispatch(setPriceFilter({
        max: 0,
        min: 0
      }));
    } else {
      dispatch(setPriceFilter({
        max,
        min
      }));
    }
  }, [dispatch, max, min, priceFilter.max, priceFilter.min]);

  useEffect(() => {
    if(priceFilter.max === max && priceFilter.min === min){
      setIsSelected(true)
    } else {
      setIsSelected(false);
    }
  }, [max, min, priceFilter])

  return(
    <button 
      className={`paragraph3 ${styles.container} ${isSelected ? styles.selected : styles.notSelected}`} 
      onClick={handleClickButton}
    >
      R$ {convertNumberToCurrency(min)} - R$ {convertNumberToCurrency(max)}
    </button>
  )
}

export { PriceIntervalButton }