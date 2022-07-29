import { useEffect, useState } from "react";
import { Col, Row, Form, Input, Button, Image } from "antd";
import { FiMapPin, FiMenu } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { Moment } from "moment";
import { useDispatch, useSelector } from "react-redux";

import { setLocalFilter, getFilteredList } from "@/store/reducers/ticket";

import { DatePicker } from "./DatePicker";

import styles from "./styles.module.scss";

const CityAndDateFilter = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState<Moment | null>(null);

  const dispatch = useDispatch();

  return(
    <Row justify="space-between" className={styles.container}>
      <Col xs={24} md={18} lg={12}>
        <Form onFinish={() => dispatch(setLocalFilter(city))}>
          <Input.Group compact className={styles.inputGroup}>
            <Input 
              id="localSearch"
              placeholder="GetYourGuide Tours & Tickets GmbH"
              prefix={<FiMapPin color="#4070F4" size={24}/>}
              className={styles.localInput}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <DatePicker 
              value={date} 
              onChange={date => setDate(date)}
              format="DD/MM/YYYY"
            />
            <Button
              className={styles.search}
              onClick={() => dispatch(setLocalFilter(city))}
              htmlType="submit"
            >
              <Image 
                preview={false} 
                src="/images/search.svg" 
                alt="search"
              />
            </Button>
          </Input.Group>
        </Form>
      </Col>

      <Col className={styles.listTypeButtonContainer}>
        <Row>
          <Button className={styles.listTypeButtonSelected}>
            <FiMenu size={24}/>
          </Button>

          <Button className={styles.listTypeButton}>
            <BsGrid size={24}/>
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

export{ CityAndDateFilter }