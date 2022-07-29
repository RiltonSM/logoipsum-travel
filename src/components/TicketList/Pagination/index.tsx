import { useCallback, useEffect, useState } from "react";
import { Row, Select } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { getRandomInt } from "@/utils/randomNumber";

import { PaginationIcon } from "./PaginationIcon";
import { PaginationItem } from "./PaginationItem";

import styles from "./styles.module.scss";

const { Option } = Select;

const Pagination = () => {
  const [resultsNumber, setResultsNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();
  const filteredList: Array<any> = useSelector((state: any) => state.ticket.filteredList);
  const page = useSelector((state: any) => state.ticket.page)

  const itensPerPage = 10;

  useEffect(() => {
    setResultsNumber(filteredList.length)
  }, [filteredList]);

  useEffect(() => {
    setTotalPages(() => {
      const numberOfPages = resultsNumber / itensPerPage;
      return Math.ceil(numberOfPages);
    })
  }, [resultsNumber]);

  const pageNumbersGenerator = () => {
    const paginationNumbers = new Array();
    
    for(let i = 0; i < totalPages; i++) {
      paginationNumbers.push(
        <PaginationItem
          key={`page_button_${getRandomInt()}`}
          currentPage={page}
          page={i + 1}
        />
      )
    }

    return paginationNumbers;
  }

  const pageOptionGenerator = useCallback(() => {
    const paginationNumbers = new Array(totalPages).fill(null);
    return paginationNumbers.map((_page, index) => {
      return (
        <Option key={`page_option_${getRandomInt()}`} value={index + 1}>
          {Intl.NumberFormat("pt-br", {minimumIntegerDigits: 2}).format(index + 1)}
        </Option>
      )
    })
  }, [totalPages]);

  return(
    <Row className={styles.container}>
      <span className={styles.resultsNumber}>{`${resultsNumber} Resultados`} </span>

      <span className={styles.selectLabel}>Página:</span>

      <Select value={page}>
        {pageOptionGenerator()}
      </Select>

      <Row className={styles.pagination}>
        <PaginationIcon
          currentPage={page}
          total={totalPages}
          type="prev"
        >
          <FiChevronLeft size={18}/>
        </PaginationIcon>

        { pageNumbersGenerator() }

        <PaginationIcon
          currentPage={page}
          total={totalPages}
          type="forward"
        >
          <FiChevronRight size={18}/>
        </PaginationIcon>
      </Row>
    </Row>
  )
}

export { Pagination }
