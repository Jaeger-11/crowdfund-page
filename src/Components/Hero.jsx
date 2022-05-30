import React, {useState} from 'react';
import { Container, Image, Nav, Title, Small, Text, Button, Mini, Input, HR } from "./styles";
import heroImage from '../images/image-hero-mobile.jpg';
import hamburger from '../images/icon-hamburger.svg';
import closeMenu from '../images/icon-close-menu.svg';
import bookmark from '../images/icon-bookmark.svg';
import logo from '../images/logo.svg';
import logoMastercraft from '../images/logo-mastercraft.svg';
import Package from './Package';
import {info} from './data'
import Menu from './Menu';
import Modal from './Modal';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amountBacked, setAmountBacked] = useState(89914);
    const [totalBackers, setTotalBackers] = useState( 5007);
    const percent = (amountBacked/100000) *100;
    const [isBookmark, setIsBookmark] = useState(false);

    return (
        <Container>
            <Nav>
                <Image className="navimage" src={logo}/>
                {isMenuOpen ? 
                <Image className="navimage" src={closeMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}/> : 
                <Image className="navimage" src={hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                }
            </Nav>
            {isMenuOpen && <Menu setIsMenuOpen = {setIsMenuOpen}/>}
            {isModalOpen && 
            <Modal 
            setIsModalOpen = {setIsModalOpen} 
            setAmountBacked = {setAmountBacked} 
            amountBacked={amountBacked}
            setTotalBackers={setTotalBackers}
            totalBackers={totalBackers}
            />}
            <Image src={heroImage} className="heroimage"/>
            <Mini style={{position: 'relative', top:'-4.5rem'}} className="cont" >
                <Small className='first'>
                    <Image src= {logoMastercraft} className="logoimage"/>
                    <Title center> Mastercraft Bamboo Monitor Riser </Title>
                    <Text center style={{margin: "1.5rem auto"}}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Text>
                    <Mini  className="firstflex">
                        <Button onClick={() => setIsModalOpen(true)} >
                        <a href='#modal' style={{textDecoration:"none", color: "white"}}> Back this project</a> </Button>
                        <Button className='herobtn' onClick={() => setIsBookmark(!isBookmark)}>
                            <Image src={bookmark} className="bmk" /> 
                            {isBookmark ? "Bookmarked" : "Bookmark"}
                        </Button>
                        <Image src={bookmark} className="bookmark"/>
                    </Mini>
                </Small>
                <Small>
                    <Mini className='grid'>
                        <Mini >
                            <Title className='align'>${amountBacked}</Title>
                            <Text className='align'>of $100,000 backed</Text>
                        </Mini>
                        <HR/>
                        <Mini className='sideborder'>
                            <Title className='align'>{totalBackers}</Title>
                            <Text className='align'>total backers</Text>
                        </Mini>
                        <HR/>
                        <Mini>
                            <Title className='align'>56</Title>
                            <Text className='align'>days left</Text>
                        </Mini>
                    </Mini>
                    <Mini style={{width: '95%', height: "7px", background: "#eee", margin:"auto", borderRadius:"1rem"}}>
                        <p style={{width: `${percent}%`, background: "hsl(176, 50%, 47%)", height:"7px", borderRadius:"1rem"}}></p>
                    </Mini>
                </Small>
                <Small>
                    <Mini style={{width: "90%", margin: "auto"}}>
                        <Title className='package'>About this project</Title>
                        <Text>
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                        </Text>
                        <Text className='package'>
                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                        </Text>
                    </Mini>
                        {info.map((item) => {
                            return <Package {...item} key={item.id} setIsModalOpen={setIsModalOpen} />
                        })}            
                </Small>
            </Mini>
        </Container>
    )
}

export default Hero;