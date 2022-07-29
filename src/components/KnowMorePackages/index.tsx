import { Row, Col, Image, Button } from "antd";

import styles from './styles.module.scss';

const KnowMorePackages = () => {
    return(
        <Row className={styles.container} justify="space-between" align="middle">
          <Col>
            <Row align="middle">
              <Col className={styles.earthGlobe}>
                <Image
                  preview={false}
                  src="/images/globe.png"
                  alt="Earth Globe"
                />
              </Col>

              <p className={`heading3 ${styles.text}`}>
                  Pacotes a partir de R$499? Até parece viagem!<br/>
                  Descubra o seu próximo destino por um precinho que só o lorem tem.
              </p>
            </Row>
          </Col>

          <Col>
            <Button
                type="default"
                size="large"
                className={styles.button}
            >
              <span className={styles.buttonText}>Conheça mais pacotes</span>
              <Image
                preview={false}
                src="/images/arrow-right-blue.svg"
                alt="->"
              />
            </Button>
          </Col>
        </Row>
    )
}

export { KnowMorePackages }