import styled from 'styled-components';
import heroImageDesktop from '../images/image-hero-desktop.jpg';

const colors = {
    Moderate: 'hsl(176, 50%, 47%)',
    Dark: 'hsl(176, 72%, 28%)',
    Black: 'hsl(0, 0%, 0%)',
    gray: 'hsl(0, 0%, 48%)',
}

const size = {
    mobile : '(min-width: 480px)',
    tablet: '(min-width: 768px)',
    laptop : '(min-width: 1024px)',
    laptopL : '(min-width: 1440px)',
}

export const Container = styled.div`
    width: 100%;
    background-color: #eee;
    font-family: 'Commissioner', sans-serif;
    font-size: 16px;
`;

export const Image = styled.img`
    &.heroimage{
        display: block;
        width: inherit;
        height: max-content;
        @media ${size.mobile} {
            content: url(${heroImageDesktop});
        }
    }
    &.navimage{
        display: block;
        height: 20px;
        margin: 1.5rem;
        cursor: pointer;
    }
    &.logoimage{
        position: relative;
        top: -2rem;
        width: 4rem;
        
    }
    &.bookmark{
        width: 3.5rem;
        cursor: pointer;
        @media ${size.mobile}{
            display: none;
        }
    }
    &.bmk{
        width: 3rem;
        position: relative;
        left: -1rem;
    }
    &.close{
        height: 20px;
        cursor: pointer;
    }
`;

export const Nav = styled.nav`
    position: absolute;
    width: 100%;
    top: 0;
    /* padding: 2rem 1.5rem; */
    display: flex;
    justify-content: space-between;
`;

export const Small = styled.section`
    &{
        width: 80%;
        margin: 1rem auto;
        background-color: white;
        border-radius: 10px;
        padding: 1rem 1rem 1.5rem 1rem;
    }
    &.info{
        border: 1px ${colors.gray} solid ;
        margin: 1.5rem auto;
    }
    &.blur{
        border: 1px ${colors.gray} solid;
        margin: 1.5rem auto;
        opacity: 0.5;
    }
    &.first{
        margin-top: 0;
        padding-top: 0;
        text-align: center;
    }
    &.menu{
        position: absolute;
        top: 5rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        margin: auto;
        padding:1.5rem 1rem;
        box-shadow: rgba(0,0,0,0.35) 0px 5px 150px;
        width: 80%;
        @media ${size.mobile}{
            width: 70%;
        }
    }
    &.modal{
        position: absolute;
        top: 3rem;
    }
`;

export const Mini = styled.div`
    &.cont{
        @media ${size.tablet}{
            width: 70%;
            margin: auto;
        }
    }
    &.firstflex{
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        @media ${size.mobile} {
            justify-content: space-between;
            width: 80%;
            margin: auto;
        }
    }
    &.modalflex{
        &:hover{
            color: ${colors.Moderate};
            cursor: pointer;
        }
        @media ${size.mobile}{
            display: flex;
            justify-content: flex-start;
            gap: 1rem;
        }
    }
    &.flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    &.miniflex{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-bottom: 1rem;
        font-size: small;
    }
    &.maxflex{
        @media ${size.mobile} {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    }
    &.grid{
        @media ${size.mobile} {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            margin: 1rem;
        }
    }
    &.sideborder{
        @media ${size.mobile}{
            border: 1px solid #eee;
            border-top: none;
            border-bottom: none;
            text-align: right;
            padding: 0 1rem;
            margin-right: 1rem;
        }
    }
    &.inputbtn{
        background-color: transparent;
        border: 1px solid ${colors.Moderate};
        border-radius: 30px;
        color: ${colors.gray};
        padding: 0 1rem;
        display: flex;
        align-items: center;
    }
`;

export const Title = styled.h2`
    color: ${colors.Black};
    font-size: ${props => props.small ? "small" : "x-large"};
    text-align: ${props => props.center ? "center" : "left"};
    margin: 0.3rem 0;
    &.titlehover{
        font-size: small;
        &:hover{
            color: ${colors.Moderate};
        }
    }
    &.small{
        font-size: large;
        font-weight: 700;
    }
    &.border{
        padding: 2rem;
        margin: 0;
        border-bottom: 1px solid #eee;
        &:last-of-type{
            border:none;
        }
    }
    &.package{
        margin: 1rem 0;
    }
    &.left{
        margin: 1rem 0;
        @media ${size.mobile}{
            position: absolute;
            top: -1rem;
            right: 1rem;
        }
    }
    &.align{
        text-align: center;
        @media ${size.mobile}{
            text-align: left;
        }
    }
`;

export const Text = styled.p`
    margin: 0.3rem 0;
    color: ${props => props.cyan ? colors.Moderate : colors.gray};
    text-align: ${props => props.center ? "center" : "left"};
    font-weight: ${props => props.thick ? 500 : 300};
    &.package{
        margin: 0.9rem 0;
    }
    &.infotext{
        @media ${size.mobile}{
            margin-left: 5%;
        }
    }
    &.align{
        text-align: center;
        @media ${size.mobile}{
            text-align: left;
        }
    }
`;

export const Button = styled.button`
    background-color: ${colors.Moderate};
    padding: 1rem 1.5rem;
    border-radius: 30px;
    border: cyan;
    color: white;
    font-weight: 700;
    font-family: 'Commissioner';
    cursor: pointer;
    &:hover{
        background-color: ${colors.Dark};
    }
    &.btnleft{
        margin-left: 0.1rem;
        display: block;
    }
    &.blur{
        background-color: ${colors.gray};
    }
    &.herobtn{
        display: flex;
        align-items: center;
        padding: 0 1rem;
        font-weight: 700;
        color: ${colors.Dark};
        background-color: #eee;
        &:hover{
        background-color: #eee;
        color: ${colors.Black};
        }
        @media (max-width: 480px) {
            display: none;
        }
    }
`; 

export const Form = styled.form`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
`;

export const Input = styled.input`
    
    &.number{
        width: 2rem;
        text-align: center;
        font-weight: bold;
        border-right: 1px solid #eee;
        border-left: none;
        border-top: none;
        border-bottom: none;
        text-align: left;
    }
    &.radio{
        width: 1.2rem;
        height: 1.2rem;
        color: red;
        &:checked{
            background: ${colors.Moderate};
        }
    }
`;

export const HR = styled.hr`
    width: 30%;
    margin: 1.2rem auto;
    @media ${size.mobile}{
        display: none;
    }
`;