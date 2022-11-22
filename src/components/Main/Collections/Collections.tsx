import classes from './Collections.module.css'
import ring1 from '../../../assets/images/ring1.png'
import ring2 from '../../../assets/images/ring2.png'
import ring3 from '../../../assets/images/ring1.png'
import ring4 from '../../../assets/images/ring1.png'
import { useState } from 'react'
import RingInfo from './RingInfo'
import React from 'react'
import backgroundImg from '../../../assets/images/background_collection.png'
import backgroundImg2 from '../../../assets/images/background_collection_2.png'

const photos = [ring1, ring2, ring3, ring4]

export type RingInfoType = {
  ringName: string
  gold: null | string
  silver: null | string
  weight: string
  size: string
  photo: undefined[] | string[]
}

type Props = {
  setIsVisibleOrderMessage: React.Dispatch<React.SetStateAction<boolean>>
  isVisibleOrderMessage: boolean
  photosInfo: RingInfoType[]
}

const Collections: React.FC<Props> = React.memo(({ setIsVisibleOrderMessage, isVisibleOrderMessage, photosInfo }) => {
  const [ringInfo, setRingInfo] = useState<RingInfoType>(photosInfo[0]!)
  const [isVisibleInfo, setIsVisibleInfo] = useState(false)
  const [isVisibleButton, setIsVisibleButton] = useState(false)
  const [indexItem, setIndexItem] = useState<null | number>(null)

  const handleClick = (i: number) => {
    setRingInfo(photosInfo[i]!)
    setIsVisibleInfo(true)
  }

  const onHover = (i: number) => {
    setIndexItem(i)
    setIsVisibleButton(true)
  }

  const onMouseOut = () => {
    setIsVisibleButton(false)
  }

  return (
    <div id='aboutMe' className={classes.aboutMe}>
      <h2 className={classes.headingImagesBlock}>
        КОЛЛЕКЦИИ
      </h2>
      {isVisibleInfo && <RingInfo setIsVisibleInfo={setIsVisibleInfo} isVisibleOrderMessage={isVisibleOrderMessage}
        setIsVisibleOrderMessage={setIsVisibleOrderMessage} ringInfo={ringInfo}
        photosInfo={photosInfo} />}
      <div className={classes.ringCollectionBlock}>
        {photos.map((e, i) => (
          <div className={classes.wrapperRingItem}>
            <div key={i} className={classes.ringItem} onMouseOver={() => onHover(i)} onMouseOut={onMouseOut}>
              <div>
                <img src={e} alt="Украшение" className={classes.ringItemImg} />
              </div>
              <div className={classes.ringName}>
                {photosInfo[i].ringName}
              </div>
              <div className={classes.moreDetailedButton}>
                <button onClick={() => handleClick(i)}>ПОДРОБНЕЕ</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.aboutMeText}>
        <div>
          “Мы создаем неповторимые и яркие украшения,
        </div>
        <div>
          способные подчеркнуть личность их владельца.”
        </div>
      </div>
      <div>
        <div className={classes.backgroundCollection1}><img src={backgroundImg} /></div>
        <div className={classes.backgroundCollection2}><img src={backgroundImg2} /></div>
      </div>
    </div>
  )
})

export default Collections