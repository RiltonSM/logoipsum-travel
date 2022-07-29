import { useCallback } from "react";
import { Col } from "antd";

import styles from "./styles.module.scss";

import { getRandomInt } from "@/utils/randomNumber";

interface MenuProps {
    title: string;
    itens: Array<string>;
}

const MenuItem = ({title, itens}: MenuProps) => {

  const itensGenerator = useCallback(() => {
    return itens.map(item => {
      return <li key={`menu-item-${getRandomInt()}`} className={`paragraph3 ${styles.listItem}`}>{item}</li>
    })
  }, [itens])

  return(
    <Col className={styles.container}>
      <h2 className={`paragraph22 ${styles.listTitle}`}>{title}</h2>
      <ul className={styles.list}>
        {itensGenerator()}
      </ul>
    </Col>
  )
}

export { MenuItem }