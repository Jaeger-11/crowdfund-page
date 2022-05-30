import { Small, Title, Text, Mini, Button, Image, Input, Form } from "./styles";
import closeModal from '../images/icon-close-modal.svg';
import check from '../images/icon-check.svg'
import { options } from "./data";
import { useState } from "react";

const Modal = ({setIsModalOpen, setAmountBacked, amountBacked, setTotalBackers, totalBackers}) => {
    const [success, setSuccess] = useState(false);

    const handleClose = () =>{
        setSuccess(false)
        setIsModalOpen(false)
    } 
    
    const Sub = ({ title, pledge, infotext, left, limit, classname, btn }) => {
        const [sub, setSub] = useState(false)
        const [value, setValue] = useState(null)

        const handlePledge = (e) => {
            e.preventDefault();
            setAmountBacked(amountBacked + value);
            setTotalBackers(totalBackers + 1)
            setSuccess(true);
        }

        const handleValue = (event) => {
            setValue(Number(event.target.value));
        }

        return(
            <Small className={`${classname} info`} >
                <Mini style={{position: "relative"}}>
                    <Mini className="miniflex">
                        <Input type="radio" className="radio" name="package" value={title} onClick={()=> setSub(!sub)}/>
                        <Mini className="modalflex">
                            <Title className="titlehover" onClick={()=> setSub(!sub)}>{title}</Title>
                            <Text cyan thick>{pledge}</Text>
                        </Mini>
                    </Mini>
                    <Text className="infotext">{infotext}</Text>
                    <Title className="left">{left} {left && <span style={{fontSize : '14px', fontWeight: 300, color:"#b4b1b1"}}>left</span>}  </Title>
                </Mini>
                {sub && <Mini>
                    <hr/>
                    <Mini className="maxflex">
                        <Text center>Enter your pledge</Text>
                        <Form>
                            <Mini className="inputbtn">
                                $ <Input type="number" className="number" defaultValue={limit} min={limit} onChange={handleValue}/>
                            </Mini>
                            <Button onClick={handlePledge} className="btn">Continue</Button>
                        </Form>
                    </Mini>
                </Mini>}
            </Small>
        )
    }

    if(success){
        return (
            <Small className="menu" style={{textAlign: "center", maxWidth:"500px", padding: "1rem 1.5rem"}} >
                <Image src={check} />
                <Title center className="package">Thanks for your support!</Title>
                <Text center>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</Text>
                <Button onClick={handleClose} style={{margin: "1.5rem auto"}}>Got it!</Button>
            </Small>
        )
    }

    return(
        <div style={{height: "100%", width:'100%', position: "absolute", zIndex: 2}} id="modal">
            <Small className="menu">
                <Mini style={{width:"85%", margin: "auto"}}>
                    <Mini className="flex">
                        <Title>Back this project</Title>
                        <Image src={closeModal} onClick={() => setIsModalOpen(false)} className="close"/>
                    </Mini>
                    <Text>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Text>
                </Mini>
                <form >
                    {options.map((option) => {
                        return <Sub {...option} key={option.title} />
                    })}
                </form>
            </Small>
        </div>
    )
}

export default Modal;