import { Row } from "antd";

import styles from "./styles.module.scss";

interface ScoreBarProps {
    text?: string;
    description: string;
    score: number;
}

const ScoreBar = ({ score, text, description }: ScoreBarProps) => {
  return(
    <Row className={styles.container}>
      <Row className={styles.scoreBackground}>
        <Row className={styles.score} style={{width: `${score}%`}}>
          <span className="paragraph4">{text}</span>
        </Row>
      </Row>
      <span style={{display: "block"}} className={`paragraph4`}>{description}</span>
    </Row>
  )
}

export { ScoreBar }