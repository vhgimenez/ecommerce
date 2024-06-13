import { React, useState, useEffect } from 'react'
import { Add, Amount, AvatarImage, Brand, ButtonAddToCard, Buy, Card, CartImage, Container, Count, Desc, Discount, Icons, ImageCard, Images, Item, ItensCard, Menu, MenuList, Nav, NewPrice, OldPrice, Price, PrincipalImage, Product, ProductImage, ProductImages, ProductInfos, Remove, TextCard, Title, TitleCard } from './style'

export function Home() {

  const basePath = './';
  const [mounted,setMounted] = useState(false)
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(basePath + 'image-product-1.jpg'); // Inicialize com o caminho da primeira imagem
  const [cartVisible, setCartVisible] = useState(false); // Estado para controlar a visibilidade do carrinho

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleImageClick = (thumbnailName) => {
    const mainImageName = thumbnailName.replace('-thumbnail', ''); // Remove o sufixo "-thumbnail" do nome do arquivo
    setSelectedImage(basePath + mainImageName);
  };

  function showCardImage() {
    !cartVisible;
  }

  useEffect(() => {
          
    if(mounted){

      const btnCart = document.querySelector('.btn-cart');
      const cart = document.querySelector('.cart');
      const principalImage = document.querySelector('.principal-image');
      const imageCard = document.querySelector('.image-card');

      document.addEventListener('click', (event) => {
        console.log(imageCard);
        if (!imageCard.contains(event.target) && event.target !== principalImage && cartVisible) {
          setCartVisible(false); // Esconder o carrinho se estiver visível e o clique ocorrer fora dele
        }
      });

    
      btnCart.addEventListener('click', () => {
        cart.classList.toggle('hide');
      });

      document.addEventListener('click', (event) => {
        // Verificando se o clique ocorreu fora da div .cart
        if (!cart.contains(event.target) && event.target !== btnCart && !cart.classList.contains('hide')) {
          cart.classList.add('hide');
        }
      });

    }

    else{
        setMounted(true);
    }

  },[mounted, cartVisible])

  return (
   <Container>
    <Nav>
      <Menu>
        <MenuList>
          <Item className='logo'><img src='logo.svg'></img></Item>
          <Item>Collections</Item>
          <Item>Men</Item>
          <Item>Women</Item>
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
    <Product>
      <ProductImages>
        <PrincipalImage src={selectedImage} className='principal-image' onClick={showCardImage}></PrincipalImage>
        <Images>
        <ProductImage
          src='image-product-1-thumbnail.jpg'
          className={selectedImage === basePath + 'image-product-1.jpg' ? 'selected' : ''}
          onClick={() => handleImageClick('image-product-1-thumbnail.jpg')}
        />
        <ProductImage
          src='image-product-2-thumbnail.jpg'
          className={selectedImage === basePath + 'image-product-2.jpg' ? 'selected' : ''}
          onClick={() => handleImageClick('image-product-2-thumbnail.jpg')}
        />
        <ProductImage
          src='image-product-3-thumbnail.jpg'
          className={selectedImage === basePath + 'image-product-3.jpg' ? 'selected' : ''}
          onClick={() => handleImageClick('image-product-3-thumbnail.jpg')}
        />
        <ProductImage
          src='image-product-4-thumbnail.jpg'
          className={selectedImage === basePath + 'image-product-4.jpg' ? 'selected' : ''}
          onClick={() => handleImageClick('image-product-4-thumbnail.jpg')}
        />
        </Images>
      </ProductImages>
      <ProductInfos>
        <Brand>Sneaker Company</Brand>
        <Title>Fall Limited Edition Sneakers</Title>
        <Desc>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Desc>
        <Price>
          <NewPrice>$125.00</NewPrice>
          <Discount>50%</Discount>
        </Price>
        <OldPrice><s>$250.00</s></OldPrice>
        <Buy>
          <Count>
            <Remove src='icon-minus.svg' onClick={decrementCount}></Remove>
            <Amount>{count}</Amount>
            <Add src='icon-plus.svg' onClick={incrementCount}></Add>
          </Count>
          <ButtonAddToCard><img src='icon-cart.svg'></img> Add to cart</ButtonAddToCard>
        </Buy>
      </ProductInfos>
    </Product>
    <Card className='cart hide'>
      <TitleCard>Cart</TitleCard>
      <hr></hr>
      <ItensCard>
        <TextCard>Your cart is empty.</TextCard>
      </ItensCard>
    </Card>
    {cartVisible && (
        <div className="overlay">
          <ImageCard className='image-card'>
            <TitleCard>Cart</TitleCard>
            <hr></hr>
            <ItensCard>
              <TextCard>Your cart is empty.</TextCard>
            </ItensCard>
          </ImageCard>
        </div>
    )}
   </Container>
  )
}
