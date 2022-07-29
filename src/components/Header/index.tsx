import { Col, Row, Image, Divider } from "antd";

import styles from './styles.module.scss';

const Header = () => {
    return(
        <Row className={styles.container} justify="space-between">
          <Col xs={24} sm={12}>
            <Row justify="space-between">
              <Image preview={false} src="/images/logo.svg" alt="logoipsumº"/>

              <Row className={styles.loginSmContainer}>
                <Image preview={false} src="/images/user.svg" alt="user" className={styles.icon}/>
                <span className={styles.login}>Entrar</span>
              </Row>
            </Row>
          </Col>
          <Col xs={24} sm={12}>
            <Row align="middle" justify="end"> 
              <Row align="middle" className={styles.dolarContainer}>
                <span className={styles.dolar}>Cotação dólar hoje: R$5,53</span>
                <Image preview={false} src="/images/flag.svg" alt="Brazil" className={styles.icon}/>
                <Image preview={false} src="/images/question.svg" alt="?" className={styles.icon}/>
              </Row>

              <Divider type="vertical" className={styles.divider}/>

              <Row className={styles.loginContainer}>
                <Image preview={false} src="/images/user.svg" alt="user" className={styles.icon}/>
                <span className={styles.login}>Entrar</span>
              </Row>
            </Row>
          </Col>

        </Row>
    )
}

export { Header }