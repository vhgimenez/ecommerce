import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AvatarImage, ButtonCheckout, Card, CardPurchase, CardVisible, CartImage, CloseMenu, Container, ContentCard, ContentProduct, DeleteImage, Icons, ImageCart, Item, ItemMobile, ItensCard, ItensCardEmpty, Menu, MenuList, MenuListMobile, MenuMobile, Nav, NumberAmount, Price, ProductDescription, ProductImage, ProductName, Product, Products, SectionProductImage, TextCard, TextProductCard, TextProductP, TitleCard} from './style';
import adi2000 from '../assets/adi2000.avif';

export function Female() {

  const [mounted,setMounted] = useState(false)
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    const response = await axios.get('http://localhost:3000/products/female');
    setProducts(response.data);
    }

  function pageCollections() {
    navigate('/');
  }

  function pageMale() {
    navigate('/male')
  }


  useEffect(() => {
          
    if(mounted){

      const btnCart = document.querySelector('.btn-cart');
      const cart = document.querySelector('.cart');
      const btnMenuMobile = document.querySelector('.btn-menu-mobile');
      const menuMobile = document.querySelector('.menu-mobile');
      const btnCloseMenu = document.querySelector('.btn-close-menu');

      btnMenuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('hide');
      })

      btnCloseMenu.addEventListener('click', () => {
        menuMobile.classList.add('hide');
      })

      btnCart.addEventListener('click', () => {
        cart.classList.toggle('hide');
      });

      document.addEventListener('click', (event) => {
        // Verificando se o clique ocorreu fora da div .cart
        if (!cart.contains(event.target) && event.target !== btnCart && !cart.classList.contains('hide')) {
          cart.classList.add('hide');
        }
      });

      fetchProducts();

    }

    else{
        setMounted(true);
    }

  },[mounted])

  return (
   <Container>
    <NumberAmount className="number-amount hide"></NumberAmount>
    <MenuMobile className='menu-mobile hide'>
      <CloseMenu className='btn-close-menu' src='icon-close.svg'></CloseMenu>
      <MenuListMobile>
        <ItemMobile onClick={pageCollections}>Collections</ItemMobile>
        <ItemMobile onClick={pageMale}>Men</ItemMobile>
        <ItemMobile>Women</ItemMobile>
        <ItemMobile>About</ItemMobile>
        <ItemMobile>Contact</ItemMobile>
      </MenuListMobile>
    </MenuMobile>
    <Nav>
      <Menu>
        <MenuList>
          <Item className='btn-menu-mobile'><img src='icon-menu.svg'></img></Item>
          <Item className='logo'><img src='logo.svg'></img></Item>
          <Item onClick={pageCollections}>Collections</Item>
          <Item onClick={pageMale}>Men</Item>
          <Item className='item-selected'>Women</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </MenuList>
      </Menu>
      <Icons>
        <CartImage src='icon-cart.svg' className='btn-cart'></CartImage>
        <AvatarImage src='image-avatar.png'></AvatarImage>
      </Icons>
    </Nav>
    <hr></hr>
    <Card className='cart hide'>
      <TitleCard>Cart</TitleCard>
      <hr></hr>
      <ItensCardEmpty className='empty'>
        <TextCard>Your cart is empty.</TextCard>
      </ItensCardEmpty>
      <CardPurchase className='purchase hide'>
        <TextCard className='text-purchase'>Compra realizada com sucesso!</TextCard>
      </CardPurchase>
      <CardVisible className='visible-card hide'>
        <ItensCard>
          <ContentCard>
            <ImageCart src=""></ImageCart>
            <TextProductCard>
              <TextProductP>Fall Limited Edition Sneakers</TextProductP>
              <TextProductP>$125.00 x <b>$.00</b></TextProductP>
            </TextProductCard>
          </ContentCard>
          <DeleteImage src='icon-delete.svg' className='delete'></DeleteImage>
        </ItensCard>
        <ButtonCheckout className='checkout'>Checkout</ButtonCheckout>
      </CardVisible>
    </Card>
    <Products>
        {products&& products.map((product) => (
    <Product key={product.id}>
      <Link className='link' to={`/product/${product.id}`}>
        <SectionProductImage>
            <ProductImage src={product.image1 === 'adi2000' ? adi2000 : product.image1}></ProductImage>
        </SectionProductImage>
        <ContentProduct>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <Price>R${product.price}.00</Price>
        </ContentProduct>
      </Link>
    </Product>
        ))
        }
    </Products>
   </Container>
  )
}
