import { Col, Card, Image } from "antd";
import styles from "./styles.module.scss";

const { Meta } = Card;

interface CityCardProps {
    title: string;
    imageSrc: string;
}

const CityCard = ({ title, imageSrc }: CityCardProps) => {
    return(
        <Col className={styles.container}>
          <Card
            hoverable
            style={{
              width: 248,
              fontSize: 22
            }}
            cover={
              <Image
                preview={false}
                src={imageSrc}
                alt={title}
              />
            }
          
          >
              <Meta title={title} className={styles.title} style={{fontSize: 22}}/>
          </Card>
        </Col>
    )
}

export { CityCard }