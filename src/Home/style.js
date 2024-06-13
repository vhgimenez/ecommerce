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

`;

export const Nav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        margin-right: 2rem;
    }

`;

export const Icons = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: -2.5rem;

`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
`;

export const Item = styled.li`

    cursor: pointer;
    font-size: 1rem;
    color: hsl(219, 9%, 45%);
    height: 4rem;

    &:hover {
        border-bottom: 3px solid hsl(26, 100%, 55%);
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

`;

export const Product = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 5rem 10rem;
    align-items: center;

`;

export const ProductImages = styled.div`

    .selected {
        border: 3px solid orange;
        filter: opacity(35%);
    }

`;

export const ProductInfos = styled.div`

`;

export const PrincipalImage = styled.img`

    width: 30rem;
    border-radius: 1rem;
    cursor: pointer;

`;

export const Images = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

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

`;

export const Title = styled.h1`

    font-size: 2.8rem;
    margin-bottom: 2.5rem;
    width: 27rem;

`;

export const Desc = styled.p`

    font-size: 1.1rem;
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    width: 30rem;

`;

export const Price = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const NewPrice = styled.p`

    font-weight: 700;
    font-size: 1.8rem;

`;

export const Discount = styled.p`

    background-color: hsl(220, 13%, 13%);
    padding: .5rem .8rem;
    border-radius: .5rem;
    color: white;
    font-weight: 700;

`;

export const OldPrice = styled.p`

    color: hsl(219, 9%, 45%);
    margin-top: .5rem;

`;

export const Buy = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const Count = styled.div`

    display: flex;
    align-items: center;
    width: 9rem;

`;

export const Remove = styled.img`

    background-color: hsl(223, 64%, 98%);
    cursor: pointer;
    padding: 1.2rem 1rem;
    width: 4rem;
    border-radius: .5rem 0 0 .5rem;

`;

export const Add = styled.img`

    background-color: hsl(223, 64%, 98%);
    cursor: pointer;
    padding: 1rem;
    width: 4rem;
    border-radius: 0 .5rem .5rem 0;

`;

export const Amount = styled.p`

    background-color: hsl(223, 64%, 98%);
    width: 10rem;
    height: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: center;

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
    
`;

export const Card = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 20rem;
    border-radius: .5rem;
    margin-top: 5rem;
    margin-right: 11rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adiciona um box-shadow com desfoque de 10px */

`;

export const TitleCard = styled.h2`

    margin: 1rem;
    font-size: 1rem;

`;

export const ItensCard = styled.div`

    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const TextCard = styled.p`

    font-weight: 700;
    color: hsl(219, 9%, 45%);

`;

export const ImageCard = styled.div`

    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra para o card de carrinho */
    z-index: 1000; /* Certifique-se de que o card de carrinho esteja acima da sobreposição */

`;