import { Row, Col, Checkbox } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { TbFilterOff } from "react-icons/tb";
import { useDispatch } from "react-redux";

import { setClearFilters } from "@/store/reducers/ticket";

import { BuildingTypeButton } from "./BuildingTypeButton";
import { PriceIntervalButton } from "./PriceIntervalButton";
import { ScoreBar } from "./ScoreBar";
import { StarsButton } from "./StarsButton";

import styles from "./styles.module.scss";

const PriceFilter = () => {
  const [checkedList, setCheckedList] = useState<Array<any>>([]);
  
  const dispatch = useDispatch();
  
  const optionsList = useMemo(() => [
    "Wi-fi", 
    "Cozinha", 
    "Máquina de lavar", 
    "Ar-condicionado", 
    "Secadora"
  ], []);

  const handleClearFilterClick = useCallback(() => {
    setCheckedList([]);
    dispatch(setClearFilters(true));

    setTimeout(() => {
      dispatch(setClearFilters(false))
    }, 1000)
  }, [dispatch]);

  return(
    <Col className={styles.container}>
      <Row justify="space-between" className={styles.filterHead}>
        <span className="heading2">Filtro</span>

        <span onClick={handleClearFilterClick} className={`paragraph3 ${styles.clearFilter}`}>Limpar todos os filtros</span>
        <TbFilterOff onClick={handleClearFilterClick} size={24} color="#3570BF" className={styles.clearFilterButton}/>
      </Row>

      <Col className={styles.subSection}>
        <p className={`paragraph22 ${styles.subtitle}`}>Preço</p>

        <Row className={styles.gridPriceInteval}>
          <PriceIntervalButton
            min={10} 
            max={390}
          />
          <PriceIntervalButton 
            min={390} 
            max={500}
          />
          <PriceIntervalButton 
            min={500} 
            max={700}
          />
          <PriceIntervalButton 
            min={700} 
            max={1000}
          />
        </Row>
      </Col>

      <Col className={styles.subSection}>
        <p className={`paragraph22 ${styles.subtitle}`}>Tipo de Propriedade</p>

        <Row className={styles.starsButtons}>
          <StarsButton stars={5} reviews={200}/>
          <StarsButton stars={4} reviews={200}/>
          <StarsButton stars={3} reviews={200}/>
          <StarsButton stars={2} reviews={200}/>
          <StarsButton stars={1} reviews={200}/>
        </Row>
      </Col>

      <Col className={styles.subSection}>
        <p className={`paragraph22 ${styles.subtitle}`}>Comodidades</p>
        <Col>
          <Checkbox.Group 
            options={optionsList} 
            value={checkedList}
            className={styles.gridCheckbox}
            onChange={(newList) => setCheckedList(newList)}
          />
          {/* <Checkbox>Wi-fi</Checkbox>
          <Checkbox>Cozinha</Checkbox>
          <Checkbox>Máquina de Lavar</Checkbox>
          <Checkbox>Ar-condicionado</Checkbox>
          <Checkbox>Secadora</Checkbox> */}
        </Col>
      </Col>

      <Col className={styles.subSection}>
        <p className={`paragraph22 ${styles.subtitle}`}>Tipo de Propriedade</p>

        <Col>
          <BuildingTypeButton
            name="Casa"
            quantity={346}
            iconSrc="/images/buildings/house.svg"
          />
          <BuildingTypeButton
            name="Apartamento"
            quantity={346}
            iconSrc="/images/buildings/apartament.svg"
          />
          <BuildingTypeButton
            name="Hotel"
            quantity={346}
            iconSrc="/images/buildings/hotel.svg"
          />
        </Col>
      </Col>

      <Col>
        <p className={`paragraph22 ${styles.subtitle}`}>Review Score</p>

        <ScoreBar
          description="Excelente (543)"
          score={90}
          text="9+"
        />
        <ScoreBar
          description="Muito bom (543)"
          score={80}
          text="8+"
        />
        <ScoreBar
          description="Bom (543)"
          score={70}
          text="7+"
        />
        <ScoreBar
          description="Ruim (543)"
          score={60}
          text="6+"
        />
        <ScoreBar
          description="Pessímo (14)"
          score={10}
          text=""
        />
      </Col>
    </Col>
  )
}

export { PriceFilter }