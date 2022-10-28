import { RingInfoType } from "./Collections"
import classes from './Collections.module.css'
import { useEffect, useRef, useState } from "react"
import Form from "../Form/Form"

type PropsRingInfo = {
  setIsVisibleInfo: (boolean: boolean) => void
  ringInfo: RingInfoType
  isVisibleOrderMessage: boolean
  setIsVisibleOrderMessage: React.Dispatch<React.SetStateAction<boolean>>
  photosInfo: RingInfoType[]
}

const RingInfo: React.FC<PropsRingInfo> = ({ setIsVisibleInfo, ringInfo, isVisibleOrderMessage, setIsVisibleOrderMessage, photosInfo }) => {
  const [ringPhoto, setRingPhoto] = useState(ringInfo.photo[0])
  const refPopup = useRef<HTMLDivElement | null>(null)
  const [visibleForm, setVisibleForm] = useState(false)

  const closePopup = (event: MouseEvent) => {

    if (!event.composedPath().includes(refPopup.current!)) {
      setIsVisibleInfo(false)
      setIsVisibleOrderMessage(true)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closePopup)

    return () => document.removeEventListener("mousedown", closePopup)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => { document.body.style.overflow = 'unset' };
  }, []);

  const openOrderForm = () => {
    setVisibleForm(true)
    setIsVisibleOrderMessage(false)
  }

  return (
    <div className={classes.overlay}>
      {!visibleForm && (
        <div ref={refPopup} className={classes.RingPhotoInfoBlock} >
          <div className={classes.photoBlockInfo}>
            <div className={classes.photoRing}>
              <img src={ringPhoto} alt='Ring' />
            </div>
            <div className={classes.sliderPhotoRing}>
              {ringInfo.photo.map((e, i) => (
                <div key={i}>
                  <img src={e} alt='Ring' onClick={() => setRingPhoto(e)} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={classes.headingRingInfo}>
              {ringInfo.ringName}
            </div>
            <div className={classes.ringPhotoDescription}>
              <div className={classes.textRingInfo}>
                Естественность и современность,<br /> элегантность и лаконичность
              </div>
              {ringInfo.gold !== null && <div className={classes.wrapperSpecificationsRing}>
                <div className={classes.specificationsRingItem}>Золото: </div>
                <div className={classes.specificationsRing}>{ringInfo.gold}</div>
              </div>}
              {ringInfo.silver !== null && <div className={classes.wrapperSpecificationsRing}>
                <div className={classes.specificationsRingItem}>Серебро: </div>
                <div className={classes.specificationsRing}>{ringInfo.silver}</div>
              </div>}
              <div className={classes.wrapperSpecificationsRing}>
                <div className={classes.specificationsRingItem}>Вес: </div>
                <div className={classes.specificationsRing}>{ringInfo.weight}</div>
              </div>
              <div className={classes.wrapperSpecificationsRing}>
                <div className={classes.specificationsRingItem}>Размер: </div>
                <div className={classes.specificationsRing}>{ringInfo?.size}</div>
              </div>
            </div>
            <div >
              <button className={classes.buttonOrder} onClick={openOrderForm}>
                Заказать
              </button>
            </div>
          </div>
        </div>
      )}
      {visibleForm && (
        <div ref={refPopup} className={classes.orderFormBlock} >
          <div className={classes.wrappedBackButton}>
            <button className={classes.backButton} onClick={() => setVisibleForm(false)}>← Назад</button>
          </div>
          <Form isVisibleOrderMessage={isVisibleOrderMessage} photosInfo={photosInfo}/>

        </div>
      )}

      {/* <Form /> меняется форма*/}
    </div>
  )
}

export default RingInfo