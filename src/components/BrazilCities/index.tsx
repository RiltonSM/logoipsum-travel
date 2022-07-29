import { useCallback } from "react";
import { Col, Row } from "antd";

import { cities } from "@/data/cities";

import { getRandomInt } from "@/utils/randomNumber";

import { CityCard } from "../CityCard";

import styles from "./styles.module.scss";

const BrazilCities = () => {
  const cityCardGenerator = useCallback(() => {
    return cities.map(city => {
      return(
        <CityCard key={`card-${getRandomInt()}`} title={city.title} imageSrc={city.imageSrc}/>
      )
    })
  }, []);

  return(
    <Col className={styles.container}>
      <h2 className="heading1">Conheça o Brasil</h2>

      <p className="paragraph1">Estes destinos incríveis têm muito a oferecer</p>

      <Row justify="space-between" className={styles.cityCardContainer}>
        {cityCardGenerator()}
      </Row>
    </Col>
  )
}

export { BrazilCities }