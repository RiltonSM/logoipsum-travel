import { useCallback } from "react";
import Link from "next/link";
import { Row, Col, Button } from "antd";
import { TicketImage } from "./TicketImage";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

import { convertNumberToCurrency } from "@/utils/convertNumberToCurrency";

import styles from "./styles.module.scss";
import { Evaluation } from "@/components/Evaluation";

interface TicketItemProps {
  id: string;
  imageUrl: string;
  name: string;
  local: string;
  price: number;
}

const TicketItem = ({
  id,
  imageUrl,
  local,
  name,
  price
}: TicketItemProps) => {
  return(
    <Link href={`ticket/${id}`}>
      <Row 
        className={styles.container}
      >
        <TicketImage imageSrc={imageUrl} name="Teste"/>

        <Row justify="space-between" className={styles.ticketContainer}>
          <Col className={styles.infoContainer}>
            <h2 className={`heading3 ${styles.name}`}>{name}</h2>

            <Row className={`paragraph3 ${styles.local}`}>
              <FiMapPin 
                color="#4070F4" 
                size={18}
                style={{marginRight: 4}}
              />
              {local}
            </Row>

            <Evaluation/>

          </Col>

          <Col 
            className={styles.priceContainer}
          >
            <Col>
              <p className={`paragraph3 ${styles.fromPrice}`}>de R$ 2000,00 por</p>
              <div>R$<span className={`heading2 ${styles.price}`}>{convertNumberToCurrency(price)}</span></div>
            </Col>

            <Button size="large" className={`${styles.knowMoreButton}`}>
              Saber mais
              <FiArrowRight size={14} style={{marginLeft: '1rem'}}/>
            </Button>
          </Col>
        </Row>
      </Row>
    </Link>
  )
}

export { TicketItem }