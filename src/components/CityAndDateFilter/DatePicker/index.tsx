import { useState } from "react";
import { DatePicker as AntDDatePicker, DatePickerProps, Row, Image } from "antd";
import moment from "moment";
import { BiChevronDown } from "react-icons/bi";

import styles from "./styles.module.scss"

const DatePicker = (props: DatePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return(
      <Row align="middle" className={`${styles.datePickerContainer} ${isFocused ? styles.datePickerContainerFocused : ""}`}>
        <Image 
          src="/images/calendar.svg" 
          alt="calendar"
          preview={false}
          className={styles.calendar}
        />

        <AntDDatePicker 
          {...props} 
          id="ticketDate"
          suffixIcon={<BiChevronDown size={24} color="#323232"/>}
          className={styles.datePicker}
          value={moment()}
          allowClear={false}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          onSelect={() => {
            setIsFocused(false)
          }}
        />
      </Row>
    )
}

export { DatePicker }