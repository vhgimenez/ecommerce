import styled from "styled-components";

export const Container = styled.div`

    padding: 2.5rem 15rem;
    position: relative;
    
    hr {
        border: .5px solid hsl(223, 64%, 98%);
    }

    .hide {
        display: none;
        visibility: hidden;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Cor semi-transparente para escurecer a tela */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 780px) {

        padding: 0;

        hr {
            display: none;
            visibility: hidden;
        }

        .overlay {
            display: none;
            visibility: hidden;
        }

    }

`;

export const NumberAmount = styled.p`

    position: absolute;
    background-color: hsl(26, 100%, 55%);
    border-radius: 1rem;
    width: 1.3rem;
    font-weight: 700;
    font-size: .7rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    margin-right: 19.6rem;
    margin-top: -.2rem;

    @media only screen and (max-width: 780px) {

        margin-top: 1rem;
        margin-right: 3.5rem;

    }

`;

export const Nav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 780px) {
        padding: 1rem;
    }

`;

export const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        margin-right: 2rem;
    }

    .btn-menu-mobile {
        display: none;
        visibility: hidden;
    }

    @media only screen and (max-width: 780px) {
        .logo {
            margin-right: 0;
            height: 0;
            margin-top: -1.4rem;
        }

        display: flex;
        align-items: center;

        .btn-menu-mobile {
            display: block;
            visibility: visible;
            height: 0;
        }

    }

`;

export const MenuMobile = styled.div`

    @media only screen and (max-width: 780px) {

        display: block;
        visibility: visible;
        position: fixed;
        width: 70%;
        background-color: white;
        height: 100%;
        padding: 2rem;
        z-index: 1;

    }

`;

export const CloseMenu = styled.img`

    cursor: pointer;
    margin-bottom: 3rem;

`;

export const Icons = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: -2.5rem;

    @media only screen and (max-width: 780px) {
        margin-top: 0;
        gap: 1rem;
    }

`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;

    @media only screen and (max-width: 780px) {

        .logo {
            display: block;
            visibility: visible;
            width: 2rem;
        }

        gap: 1rem;

    }

`;

export const MenuListMobile = styled.ul`

    list-style: none;

`;

export const ItemMobile = styled.li`

    margin-bottom: 1rem;
    font-weight: 700;
    cursor: pointer;

`;

export const Item = styled.li`

    cursor: pointer;
    font-size: 1rem;
    color: hsl(219, 9%, 45%);
    height: 4rem;

    &:hover {
        border-bottom: 3px solid hsl(26, 100%, 55%);
    }

    @media only screen and (max-width: 780px) {

        display: none;
        visibility: hidden;
        margin-top: -1rem;

        &:hover {
            border: none;
        }

    }

`;

export const CartImage = styled.img`

    cursor: pointer;

`;

export const AvatarImage = styled.img`

    width: 3rem;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s;

    &:hover {
        border: 2px solid orange;
    }

    @media only screen and (max-width: 780px) {

        width: 2rem;

        &:hover {
            border: none;
        }

    }

`;

export const Product = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 5rem 10rem;
    align-items: center;

    @media only screen and (max-width: 780px) {

        padding: 0;
        display: block;
    }

`;

export const PreviousMobile = styled.div`

    display: none;
    visibility: hidden;

    @media only screen and (max-width: 780px) {

        display: block;
        visibility: visible;
        position: absolute;
        left: 2%;
        background-color: white;
        border-radius: 50%;
        width: 2.3rem;
        height: 2.3rem;
        display: flex;
        align-items: center;
        padding: .6rem;
        cursor: pointer;
        z-index: 0;
        top: 22%;

        img {
            width: .8rem;
        }

    }

`;

export const NextMobile = styled.div`

    display: none;
    visibility: hidden;

    @media only screen and (max-width: 780px) {

        display: block;
        visibility: visible;
        position: absolute;
        right: 2%;
        background-color: white;
        border-radius: 50%;
        width: 2.3rem;
        height: 2.3rem;
        display: flex;
        align-items: center;
        padding: .8rem;
        cursor: pointer;
        top: 22%;

        img {
            width: .8rem;
        }


    }

`;

export const ProductImages = styled.div`

    .selected {
        border: 3px solid orange;
        filter: opacity(35%);
    }

`;

export const ProductInfos = styled.div`

    @media only screen and (max-width: 780px) {

        padding: 2rem;

    }

`;

export const PrincipalImage = styled.img`

    width: 30rem;
    border-radius: 1rem;
    cursor: pointer;

    @media only screen and (max-width: 780px) {

        width: 100%;
        height: 22rem;
        border-radius: 0;
        cursor: auto;

    }

`;

export const Images = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

    @media only screen and (max-width: 780px) {

        display: none;
        visibility: hidden;

    }

`;

export const ProductImage = styled.img`

    width: 6rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        filter: opacity(35%);
    }

`;

export const Brand = styled.p`

    text-transform: uppercase;
    letter-spacing: .1rem;
    color: hsl(219, 9%, 45%);
    font-weight: 700;
    margin-bottom: 1rem;

    @media only screen and (max-width: 780px) {

        font-size: .9rem;

    }

`;

export const Title = styled.h1`

    font-size: 2.8rem;
    margin-bottom: 2.5rem;
    width: 27rem;

    @media only screen and (max-width: 780px) {

        font-size: 2rem;
        margin-bottom: 1rem;

    }

`;

export const Desc = styled.p`

    font-size: 1.1rem;
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    width: 30rem;

    @media only screen and (max-width: 780px) {

        width: 100%;
        font-size: 1.2rem;

    }

`;

export const TotalPrice = styled.div`

    @media only screen and (max-width: 780px) {

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

    }

`;

export const Price = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 780px) {

        margin-top: 0;

    }

`;

export const NewPrice = styled.p`

    font-weight: 700;
    font-size: 1.8rem;

    @media only screen and (max-width: 780px) {

        font-size: 1.6rem;

    }

`;

export const Discount = styled.p`

    background-color: hsl(220, 13%, 13%);
    padding: .5rem .8rem;
    border-radius: .5rem;
    color: white;
    font-weight: 700;

    @media only screen and (max-width: 780px) {

        font-size: 1rem;

    }

`;

export const OldPrice = styled.p`

    color: hsl(219, 9%, 45%);
    margin-top: .5rem;

    @media only screen and (max-width: 780px) {

        color: hsl(219, 9%, 45%);
        font-weight: 700;

    }

`;

export const Buy = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 780px) {

        display: block;

    }

`;

export const Count = styled.div`

    display: flex;
    align-items: center;
    width: 9rem;

    @media only screen and (max-width: 780px) {
        width: 100%;
    }

`;

export const Remove = styled.img`

    background-color: hsl(223, 64%, 98%);
    cursor: pointer;
    padding: 1.2rem 1rem;
    width: 4rem;
    border-radius: .5rem 0 0 .5rem;

    @media only screen and (max-width: 780px) {
        width: 15%;
        padding: 1.6rem;
    }

`;

export const Add = styled.img`

    background-color: hsl(223, 64%, 98%);
    cursor: pointer;
    padding: 1rem;
    width: 4rem;
    border-radius: 0 .5rem .5rem 0;

    @media only screen and (max-width: 780px) {
        width: 13.5%;
        padding: 1.4rem;
    }

`;

export const Amount = styled.p`

    background-color: hsl(223, 64%, 98%);
    width: 10rem;
    height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 780px) {
        width: 71.5%;
        font-weight: 700;
        height: 3.5rem;
    }

`;

export const ButtonAddToCard = styled.button`

    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: .5rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: 'Kumbh Sans';
    font-weight: 700;
    color: hsl(220, 13%, 13%);
    font-size: 1rem;
    cursor: pointer;
    transition: all .3s;

    img {
        color: hsl(220, 13%, 13%);
    }

    &:hover {
        filter: opacity(75%);
    }

    @media only screen and (max-width: 780px) {

        margin-top: 1rem;

    }
    
`;

export const Card = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 22rem;
    border-radius: .5rem;
    margin-top: 5rem;
    margin-right: 11rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adiciona um box-shadow com desfoque de 10px */
    padding: 1.5rem;


    @media only screen and (max-width: 780px) {

        margin-right: 0;
        width: 95%;
        right: 2.5%;

        
        hr {
            display: block;
            visibility: visible;
        }

    }

`;

export const TitleCard = styled.h2`

    font-size: 1rem;
    margin-bottom: 1rem;

`;

export const ItensCardEmpty = styled.div`

    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const CardPurchase = styled.div`
    
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-purchase {
        color: hsl(26, 100%, 55%);
    }

`

export const CardVisible = styled.div`

`;

export const ItensCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;

`;

export const ContentCard = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const TextProductCard = styled.div`

    display: flex;
    flex-direction: column;
    gap: .4rem;

`;

export const TextProductP = styled.p`

    color: hsl(219, 9%, 45%);
    font-size: .9rem;

    b {
        color: black;
    }

    @media only screen and (max-width: 780px) {

        font-size: 1rem;

    }

`;

export const ImageCart = styled.img`

    width: 3rem;
    border-radius: .5rem;

`;

export const TextCard = styled.p`

    font-weight: 700;
    color: hsl(219, 9%, 45%);

`;

export const DeleteImage = styled.img`

    cursor: pointer;

`;

export const ButtonCheckout = styled.button`

    margin-top: 1rem;
    width: 100%;
    border: none;
    border-radius: .6rem;
    padding: 1rem;
    background-color: hsl(26, 100%, 55%);
    font-weight: 700;
    font-size: .9rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        filter: opacity(75%);
    }

`;

export const ImageCard = styled.div`

    background-color: white;
    border-radius: .5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra para o card de carrinho */
    z-index: 1000; /* Certifique-se de que o card de carrinho esteja acima da sobreposição */
    width: 30%;
    position: relative;

    @media only screen and (max-width: 780px) {

        display: none;
        visibility: hidden;

    }

`;

export const ImagePrincipalCard = styled.img`
    width: 100%;
    border-radius: .5rem;
`;

export const Previous = styled.div`

    position: absolute;
    left: 0;
    top: 50%;
    margin-left: -1.7rem;
    border-radius: 50%;
    background-color: white;
    padding: .5rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export const ImagePrevious = styled.img`

`;

export const Next = styled.div`

    position: absolute;
    right: 0;
    top: 50%;
    margin-right: -1.7rem;
    border-radius: 50%;
    background-color: white;
    padding: .5rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export const ImageNext = styled.img`

`;

export const ImagesLine = styled.div`

    position: absolute;
    right: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    .selected {
        border: 3px solid orange;
        filter: opacity(35%);
    }

`;

export const ImageLine = styled.img`

    width: 6rem;
    border-radius: 1rem;
    cursor: pointer;

`;

export const CloseCard = styled.div`

    position: absolute;
    right: 0;
    top: 0;
    margin-top: -3rem;
    border-radius: 50%;
    background-color: white;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export const BtnCloseCard = styled.img`

    width: 1rem;

`;