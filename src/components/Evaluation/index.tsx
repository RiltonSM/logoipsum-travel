import { Row } from "antd";

import styles from "./styles.module.scss";

const Evaluation = () => {
    return(
      <Row className={`${styles.evaluation} paragraph3`} align="middle">
        <div className={styles.squareEvaluation}>
          6.3
        </div>
        Excellent <span className={styles.reviews}>(423 Reviews)</span>
      </Row>
    )
}

export { Evaluation }