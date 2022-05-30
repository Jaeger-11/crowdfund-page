import {Small, Mini, Title, Text, Button} from './styles';

const Package  = ({title, pledge, infotext, classname, left, setIsModalOpen, btn}) => {
    return (
        <Small className={classname}>
            <Mini className='maxflex'>
                <Title className='small'>{title}</Title>
                <Text cyan thick className='package'>{pledge}</Text>
            </Mini>
            <Text>{infotext}</Text>
            <Mini className='maxflex'>
                <Title className='package'>{left} <sup style={{fontSize : '12px', fontWeight: 300, color:"#b4b1b1"}}>left</sup></Title>
                <Button className={`${btn} btnleft` }onClick={() => setIsModalOpen(true)}> 
                    <a href='#modal' style={{textDecoration:"none", color: "white"}} >{left ? "Select Reward" : "Out Of Stock"}</a> 
                </Button>
            </Mini>
        </Small>
    )
}

export default Package;