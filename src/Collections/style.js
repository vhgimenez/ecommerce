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

    .item-selected {
        border-bottom: 3px solid hsl(26, 100%, 55%);
    }

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

export const Products = styled.div`
    
    margin-top: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem;

    @media only screen and (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`;

export const Product = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid black;
    gap: 1rem;
    cursor: pointer;

    .link {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    @media only screen and (max-width: 780px) {
        width: 90%;
        margin: 0 auto;
    }

`;

export const SectionProductImage = styled.div`

`;

export const ProductImage = styled.img`

    width: 10rem;
    border-radius: 1rem 0 0 1rem;

    @media only screen and (max-width: 780px) {
        width: 8rem;
    }

`;

export const ContentProduct = styled.div`

`;

export const ProductName = styled.h1`

    color: hsl(220, 13%, 13%);
    font-size: 1.4rem;

    @media only screen and (max-width: 780px) {
        font-size: 1.2rem;
    }

`;

export const ProductDescription = styled.p`

    font-size: .6rem;
    width: 17rem;
    text-align: justify;
    color: hsl(219, 9%, 45%);

    @media only screen and (max-width: 780px) {
        font-size: .5rem;
    }

`;

export const Price = styled.p`

    color: hsl(219, 9%, 45%);
    margin-top: .5rem;
    font-size: .9rem;
    font-weight: 700;
    color: hsl(26, 100%, 55%);

    @media only screen and (max-width: 780px) {
        font-size: .8rem;
    }

`;