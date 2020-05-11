import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [isShown, setIsShown] = useState(false)

  const toggleDay = () => setIsShown(isShown => !isShown)
  return (
    <article className={styles.day}>
      <h4>
        {day}{" "}
        <button onClick={toggleDay} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {isShown && <p>{info}</p>}
    </article>
  )
}

export default Day
