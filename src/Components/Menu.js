import { Small, Title } from "./styles";

const Menu = ({setIsMenuOpen}) => {
    const handleClick = (event) => {
        if(event.target.classList.contains('menu')){
            setIsMenuOpen(false)
        }
    }
    return (
        <div style={{
            height: "100%", 
            width:'100%', 
            backgroundColor: "rgba(0, 0, 0, 0.35)", 
            position: "absolute", 
            zIndex: 2
            }} onClick={handleClick} className="menu">
            <Small className="menu" style={{maxWidth: "500px"}}>
                <Title className="border" >About</Title>
                <Title className="border" >Discover</Title>
                <Title className="border" >Get Started</Title>
            </Small>
        </div>
       
    )
}

export default Menu;