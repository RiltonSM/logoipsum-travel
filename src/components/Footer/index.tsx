import { Row, Col, Image } from "antd";
import { MenuItem } from "./MenuItem";

import styles from "./styles.module.scss";

const Footer = () => {
    return(
      <>
        <Row className={styles.introdution} justify="space-between">
          <Col 
            xs={24} 
            md={24} 
            lg={9} 
            xl={7}
          >
            <Row className={styles.logoBlueContainer}>
              <Image
                preview={false}
                src="/images/logo-blue-background.svg"
                alt="logoipsumº"
                className={styles.logoBlue}
              />
            </Row>

            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id consequat dignissim metus. Mi et aenean quam lacus, enim nunc. Enim pellentesque interdum dui, integer bibendum at id. Sed nisi, enim, eleifend duis arcu, orci nisl massa.
            </p>

            <Row className={styles.socialMedia}>
              <Image
                preview={false}
                src="/images/linkedin.svg"
                alt="LinkedIn"
                className={styles.icon}
              />

              <Image
                preview={false}
                src="/images/instagram.svg"
                alt="Instagram"
                className={styles.icon}
              />
            </Row>
          </Col>
          
          <Col xs={24} lg={9}>
            <Row className={styles.menu} justify="space-around">
              <Col>
                <MenuItem
                  title="Conheça"
                  itens={["Quem somos", "Trabalhe conosco", "Seja um parceiro"]}
                />
              </Col>
              <Col>
                <MenuItem
                  title="Viaje"
                  itens={["Pacotes", "Passagens", "Hotéis"]}
                />
              </Col>
              <Col>
                <MenuItem
                  title="Fale conosco"
                  itens={["Central de Ajuda", "Política de provacidade", "Política de cookies", "Termos de uso"]}
                />
              </Col>
            </Row>
          </Col>

        </Row>
        <Row className={styles.copyright} justify="space-between">
          <Col>
            <span>Copyright 2021 | Just Travel Travel Tech. All Rights Reserved.</span>
          </Col>

          <Col className={styles.madeInBrazil}>
            <span>Engineering made in Brazil</span>

            <Image preview={false} src="/images/flag.svg" alt="Brazil" className={styles.flag}/>
          </Col>
        </Row>
      </>
    )
}

export { Footer }