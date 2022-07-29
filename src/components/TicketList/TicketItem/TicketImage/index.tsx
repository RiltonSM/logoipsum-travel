import { useCallback, useState } from "react";
import { Col, Image } from "antd";
import { FiHeart } from "react-icons/fi";

import { TicketBullet } from "./TicketBullet";

import styles from "./styles.module.scss";

interface TicketImageProps {
  name: string
  imageSrc: string
}

const TicketImage = ({ imageSrc, name }: TicketImageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickOnFavorite = useCallback(() => {
    return setIsFavorite((oldState) => {
      return !oldState;
    })
  }, []);

  return(
    <Col className={styles.container}>
      <TicketBullet/>
      <Image 
        preview={false} 
        src={imageSrc} 
        alt={name}
        className={styles.image}
      />
      <FiHeart
        className={styles.favoriteIcon}
        size={24}
        color={isFavorite ? "#4070F4" : "#FFFFFF"}
        onClick={(e) => {
          e.stopPropagation();
          handleClickOnFavorite()
        }}
      />
    </Col>
  )
}

export { TicketImage }