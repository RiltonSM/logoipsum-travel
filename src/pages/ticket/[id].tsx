import { useCallback, useEffect, useMemo,  useState } from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Row, Col, Image, Button, Space, DatePicker, Divider, Collapse } from "antd";
import { FiMapPin, FiChevronDown, FiMinus, FiPlus } from "react-icons/fi";
import ptBR from "antd/lib/date-picker/locale/pt_BR";
import 'moment/locale/pt-br';
import moment from "moment";
import axios from "axios";



import styles from "./styles.module.scss";
import { api } from "@/services/api";
import { Evaluation } from "@/components/Evaluation";
import { convertNumberToCurrency } from "@/utils/convertNumberToCurrency";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

const { Panel } = Collapse;

interface TicketDetailProps {
  name: string;
  description: string,
  price: number;
  location: string;
  images: string;
  lat: string;
  lon: string;
}

const TicketDetail = ({
  description,
  images,
  location,
  name,
  price,
  lat,
  lon
}: TicketDetailProps) => {
  const [isPreviewImageVisible, setIsPreviewImageVisible] = useState(false);

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [adultTicketQuantity, setAdultTicketQuantity] = useState(1);
  const [infantTicketQuantity, setInfantTicketQuantity] = useState(0);

  useEffect(()=> {
    console.log(isDatePickerOpen)
  }, [isDatePickerOpen]);

  const previewOptions = useMemo(() => {
    return {
      visible: isPreviewImageVisible,
      onVisibleChange(value: any) {
        setIsPreviewImageVisible(value)
      },
    }
  }, [isPreviewImageVisible]);

  const handleClickOnDatePicker = useCallback(() => {
    setIsDatePickerOpen((oldState) => {
      return !oldState
    })
  }, []);

  const getTotalValue = useCallback(() => {
    const travelInsurance = 245.99;
    const total = (price * adultTicketQuantity) + (price * infantTicketQuantity) + travelInsurance;
    return convertNumberToCurrency(total);
  }, [adultTicketQuantity, infantTicketQuantity, price]);

  return(
    <Col className={styles.container}>
      <Row>
        <Col>
          <Link href="/">
            <Image 
              preview={false}
              src="/images/arrow-back.svg"
              alt="back"
            />
          </Link>
        </Col>
        <Col className={styles.nameAndLocationContainer}>
          <h2 className="heading2">{name}</h2>
          <Row align="middle">
            <FiMapPin size={24} color="#4070F4"/>
            <span className={`paragraph3 ${styles.location}`}>{location}</span>
          </Row>
        </Col>
      </Row>

      <Col className={styles.imageContainer}>
        <Image 
          preview={isPreviewImageVisible ? previewOptions : false}
          src={images}
          alt={`${name} image`}
          className={styles.image}
          width="100%"
          height="100%"
        />

        <Button 
          size="large"
          className={styles.imageButton}
          onClick={() => setIsPreviewImageVisible(true)}
        >
          Visualizar mais fotos
        </Button>
      </Col>
      
      <Row justify="space-between" className={styles.contentContainer}>
        <Col className={styles.infoContainer}>
          <Evaluation/>

          <Row className={styles.includeDescriptionContainer}>
              <Col className={styles.includeDescriptionItem}>
                <Image preview={false} src="/images/airline-ticket.svg" alt="ticket"/>
                <p className={`paragraph3 ${styles.includeDescriptionName}`}>Passagem aérea</p>
              </Col>

              <Col className={styles.includeDescriptionItem}>
                <Image preview={false} src="/images/wifi.svg" alt="wi-fi"/>
                <p className={`paragraph3 ${styles.includeDescriptionName}`}>Wi-Fi</p>
              </Col>

              <Col className={styles.includeDescriptionItem}>
                <Image preview={false} src="/images/coffee.svg" alt="coffee"/>
                <p className={`paragraph3 ${styles.includeDescriptionName}`}>Café da manhã</p>
              </Col>

              <Col className={styles.includeDescriptionItem}>
                <Image preview={false} src="/images/buildings/house-include.svg" alt="ticket"/>
                <p className={`paragraph3 ${styles.includeDescriptionName}`}>Passagem aérea</p>
              </Col>
          </Row>

          <h3 className={`paragraph3 ${styles.subtitle}`}>Sobre o Ingresso selecionado:</h3>

          <p className={`paragraph2 ${styles.textDescription}`}>{description}</p>

          <h3 className={`paragraph3 ${styles.subtitle}`}>Localização</h3>

          <LeafletMap lon={Number(lon)} lat={Number(lat)}/>
        </Col>

        <Col className={styles.checkoutContainer}>
          <Col onClick={() => handleClickOnDatePicker()} className={styles.ticketDate}>
            <Row>
              <Col>
                <Image
                  preview={false}
                  src="/images/calendar.svg"
                  alt="calendar"
                />
              </Col>

              <Col className={styles.ticketDatePickerContainer}>
                <p className="paragraph22">Data do Ingresso</p>
                <DatePicker
                  id="ticketDate" 
                  className={styles.datePicker} 
                  suffixIcon={false}
                  open={isDatePickerOpen}
                  allowClear={false}
                  defaultValue={moment()}
                  locale={ptBR}
                  onBlur={(e) => setIsDatePickerOpen(false)}
                  format="DD/MM/YYYY"
                />
              </Col>
              <Col>
                <FiChevronDown size={24}/>
              </Col>
            </Row>
          </Col>

          <Divider />

          <Col className={styles.ticketNumber}>
            <Collapse className={styles.customCollapse}>
              <Panel
                key="tickets"
                showArrow={false}
                className={styles.customPanel}
                header={
                  <Row>
                    <Col>
                      <Image
                        preview={false}
                        src="/images/user.svg"
                        alt="person"
                      />
                    </Col>

                    <Col className={styles.ticketNumberContent}>
                      <p className="paragraph22">Ingressos</p>
                      <span className={`paragraph2`}>
                        {new Intl.NumberFormat("pt-br", { minimumIntegerDigits: 2}).format(infantTicketQuantity + adultTicketQuantity)} Ingressos
                      </span>
                      
                    </Col>
                    <Col>
                      <FiChevronDown size={24}/>
                    </Col>
                  </Row>
                }
              >
                <Col>
                  <Space direction="vertical" size={13} style={{width: '100%'}}>
                    <Row justify="space-between" className={`paragraph2 ${styles.ticketQuantitySelector}`}>
                      <Row>
                        <FiMinus 
                          size={22} 
                          onClick={() => setInfantTicketQuantity((oldState) => {
                            if(oldState > 0){
                              return oldState - 1;
                            }
                            return oldState;
                          })}
                        /> 
                        <span className={styles.ticketQuantity}>{new Intl.NumberFormat("pt-br", {minimumIntegerDigits: 2}).format(infantTicketQuantity)}</span>
                        <FiPlus 
                          size={22}
                          onClick={() => setInfantTicketQuantity((oldState) => {
                            return oldState + 1;
                          })}
                        />
                      </Row>
                      <span>Ingresso infantil</span>
                      <span>R$ {convertNumberToCurrency(price)}</span>
                    </Row>

                    <Row justify="space-between" className={`paragraph2 ${styles.ticketQuantitySelector}`}>
                      <Row>
                        <FiMinus 
                          size={22} 
                          onClick={() => setAdultTicketQuantity((oldState) => {
                            if(oldState > 1){
                              return oldState - 1;
                            }
                            return oldState;
                          })}
                        /> 
                        <span className={styles.ticketQuantity}>{new Intl.NumberFormat("pt-br", {minimumIntegerDigits: 2}).format(adultTicketQuantity)}</span>
                        <FiPlus 
                          size={22}
                          onClick={() => setAdultTicketQuantity((oldState) => {
                            return oldState + 1;
                          })}
                        />
                      </Row>
                      <span>Ingresso adulto</span>
                      <span>R$ {convertNumberToCurrency(price)}</span>
                    </Row>
                  </Space>
                </Col>
              </Panel>
            </Collapse>
          </Col>

          <Divider />

          <Col>
            <Space direction="vertical" size={13} style={{width: "100%"}}>
              <Row justify="space-between" className={`paragraph2 ${styles.ticketQuantityReview}`}>
                <span>{new Intl.NumberFormat("pt-br", {minimumIntegerDigits: 2}).format(adultTicketQuantity)} Ingresso adulto</span>
                <span>R$ {convertNumberToCurrency(price * adultTicketQuantity)}</span>
              </Row>

              {
                infantTicketQuantity > 0 && (
                  <Row justify="space-between" className={`paragraph2 ${styles.ticketQuantityReview}`}>
                    <span>{new Intl.NumberFormat("pt-br", {minimumIntegerDigits: 2}).format(infantTicketQuantity)} Ingresso infantil</span>
                    <span>R$ {convertNumberToCurrency(price * infantTicketQuantity)}</span>
                  </Row>
                )
              }

              <Row justify="space-between" className={`paragraph2 ${styles.ticketQuantityReview}`}>
                <Row>
                  <span>Seguro viagem</span>
                </Row>
                <span>R$ {convertNumberToCurrency(245.99)}</span>
              </Row>
            </Space>

          </Col>

          <Divider />


          <Col>
            <Space direction="vertical" size={24} style={{width: "100%"}}>
              <Row justify="space-between">
                <span className={`paragraph22 ${styles.totalLabel}`}>Valor total</span>

                <span className={`heading2 ${styles.totalValue}`}>R$ {getTotalValue()}</span>
              </Row>

              <Button size="large" className={styles.buyButton}>
                Comprar Ingresso
              </Button>
            </Space>
          </Col>
        </Col>


      </Row>
    </Col>
  )

}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  let lon =  "-122.419906";
  let lat = "37.7790262";

  const { data } = await api.get<TicketDetailProps>(`ticket/${id}`);

  const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${data.location}`)

  if(response.data.length > 0){
    lon = response.data[0].lon;
    lat = response.data[0].lat;
  }

  return {
    props: {
      name: data.name,
      description: data.description,
      price: data.price,
      location: data.location,
      images: data.images,
      lon,
      lat
    }
  }
  
}

export default TicketDetail;