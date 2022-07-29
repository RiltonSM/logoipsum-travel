import { useCallback, useEffect } from "react";
import { Col, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setPage, getFilteredList } from "@/store/reducers/ticket";
import { getRandomInt } from "@/utils/randomNumber";

import { TicketItem } from "./TicketItem";
import { Pagination } from "./Pagination";

import styles from "./styles.module.scss";

const TicketList = () => {
  const dispatch = useDispatch();

  const filteredList = useSelector((state: any) => state.ticket.filteredList);
  const pageItens: Array<any> = useSelector((state: any) => state.ticket.pageItens)
  const localFilter = useSelector((state: any) => state.ticket.localFilter);
  const priceFilter = useSelector((state: any) => state.ticket.priceFilter);

  useEffect(() => {
    dispatch(getFilteredList())
  }, [localFilter, priceFilter, dispatch]);

  
  useEffect(() => {
    dispatch(setPage(1))
  }, [filteredList]);

  const ticketItemGenerator = useCallback(() => {
    return pageItens.map(item => {
      return (
        <TicketItem
          id={item.id}
          imageUrl={item.images}
          key={`ticket_item_${getRandomInt()}`}
          local={item.location}
          name={item.name}
          price={item.price}
        />
      )
    })
  }, [pageItens]);

  return(
    <Col className={styles.container}>
      <Space 
        direction="vertical" 
        size={14} 
        style={{width: '100%'}}
      >

        { ticketItemGenerator() }
      </Space>

      <Pagination/>
    </Col>
  )
}

export { TicketList }