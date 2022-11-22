import Form from "./Form/Form"
import Collections from "./Collections/Collections"
import classes from './Main.module.css'
import Slider from "./Slider/Slider"
import { useEffect, useState } from "react"
import ring2forOrder from '../../assets/images/ring2forOrder.png'
import ring2_1 from '../../assets/images/ring2_1.png'
import backgroundAtt1 from '../../assets/images/background_attachment.png'
import backgroundAtt2 from '../../assets/images/background_attachment2.JPG'

const photosInfo = [
  { ringName: `Кольцо со вставками`, gold: null, silver: null, weight: `8 гр.`, size: `24х5 мм`, photo: [undefined, undefined, undefined, undefined] },
  { ringName: `Кольцо сборное`, gold: `750 пробы`, silver: `925 пробы`, weight: `8 гр.`, size: `24х5 мм`, photo: [ring2forOrder, ring2_1, ring2_1, ring2_1] },
  { ringName: `Кольцо квадрат`, gold: `750 пробы`, silver: null, weight: `9,6гр.`, size: `22х6 мм`, photo: [undefined, undefined, undefined, undefined] },
  { ringName: `Четвертое фото`, gold: null, silver: null, weight: `8 гр.`, size: `24х5 мм`, photo: [undefined, undefined, undefined, undefined] },
  // { header: `Пятое фото`, gold: null, silver: null, weight: `8 гр.`, size: `24х5 мм`, photo: [undefined, undefined, undefined, undefined] }
]
const backgroundAttArr = [backgroundAtt1, backgroundAtt2]

const Main: React.FC = () => {
  const [backgroundAtt, setBackgroundAtt] = useState(backgroundAttArr[0])
  const [isVisibleOrderMessage, setIsVisibleOrderMessage] = useState(true)

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i += 1
      if (i >= backgroundAttArr.length) {
        i = 0
        setBackgroundAtt(backgroundAttArr[i])
      }
      setBackgroundAtt(backgroundAttArr[i])
    }, 4000)
    
  },[])
  return (
    <div className={classes.root}>
      <Slider />
      <Collections isVisibleOrderMessage={isVisibleOrderMessage} setIsVisibleOrderMessage={setIsVisibleOrderMessage} 
                    photosInfo={photosInfo}/>
      <div style={{'backgroundImage':`url(${backgroundAtt})`}} className={classes.attachment}></div>
      <div className={classes.wrapperFormBlock}>
        <Form isVisibleOrderMessage={isVisibleOrderMessage} photosInfo={photosInfo}/>
      </div>      
    </div>
  )
}

export default Main