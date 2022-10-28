import { useRef, useState } from "react"
import classes from './Form.module.css'
import emailjs from '@emailjs/browser';
import { RingInfoType } from "../Collections/Collections";

type Props = {
  isVisibleOrderMessage: boolean
  photosInfo: RingInfoType[]
}

const Form: React.FC<Props> = ({isVisibleOrderMessage, photosInfo}) => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isSendMessage, setIsSendMessage] = useState(false)
  // const [isDisabled, setIsDisabled] = useState(false)

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // emailjs.sendForm('service_xraj4xc', 'template_oovnf1j', form.current, 'AdSf-sukNqzIlMfXC')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    setName('')
    setEmail('')
    setMessage('')
    setIsSendMessage(true)
    // setIsDisabled(true)
  }
  // const closeSendMessage = () => {
  //   setIsSendMessage(false)
  //   setIsDisabled(false)
  // }

  return (
     <div className={classes.wrappedForm}>
       {/* <div className={classes.wrapperFormBlock}>  */}
      {isSendMessage && isVisibleOrderMessage &&(
        <div className={classes.sendMessage}>
          {/* <div >
            <button onClick={closeSendMessage}>X</button>
          </div> */}
          <div className={classes.headingSendMessageText}>
            БЛАГОДАРИМ ВАС ЗА ТО, ЧТО ОБРАТИЛИСЬ К НАМ.
          </div>
          <div  className={classes.border}/>
          <div className={classes.sendMessageText}>
            Мы ответим как можно скорее.
          </div>
        </div>
      )}
      <form onSubmit={onSubmitForm} className={classes.form} ref={form} id='contacts'>
        <div >
          <label className={classes.label}>
            Меня зовут
            <input className={classes.inputItemName + ' ' + classes.formItem} type='text' placeholder="Введите ваше имя" value={name} name='name' onChange={handleChangeName} required />
          </label>
        </div>
        <div className={classes.wrappedItemEmail}>
          <label className={classes.label}>
            Моя эл. почта
            <input className={classes.inputItemEmail + ' ' + classes.formItem} type='text' placeholder="Введите вашу эл. почту" value={email} name='email' onChange={handleChangeEmail} required />
          </label>
        </div>
        <div className={classes.wrappedItemOrder}>
          <label className={classes.label}>
            Я хочу заказать
            <select name='order' placeholder="" className={classes.selectOrder + ' ' + classes.formItem}>
              <option value='' disabled selected>выберите изделие</option>
              {photosInfo.map(arr => (
                <>
                  <option>{arr.ringName}</option>
                </>
              ))}
            </select>
          </label>
        </div>
        <div className={classes.wrappedItemTextarea}>
          <label className={classes.label}>
            И ещё пара слов: 
            <textarea rows={1} className={classes.formItemTextarea + ' ' + classes.formItem} name="message" placeholder="напишите ваш комментарий, если нужно" value={message} onChange={handleChangeMessage} />
          </label>
        </div>
        <div>
          <input className={classes.formButton} type="submit" value='Заказать' />
        </div>
      </form>
     </div>
         
  )
}

export default Form