import { React, useState, useEffect } from 'react'
import { Add, Amount, AvatarImage, Brand, BtnCloseCard, ButtonAddToCard, ButtonCheckout, Buy, Card, CardPurchase, CardVisible, CartImage, CloseCard, CloseMenu, Container, ContentCard, Count, DeleteImage, Desc, Discount, Icons, ImageCard, ImageCart, ImageLine, ImageNext, ImagePrevious, ImagePrincipalCard, Images, ImagesLine, Item, ItemMobile, ItensCard, ItensCardEmpty, Menu, MenuList, MenuListMobile, MenuMobile, Nav, NewPrice, Next, NextMobile, NumberAmount, OldPrice, Previous, PreviousMobile, Price, PrincipalImage, Product, ProductImage, ProductImages, ProductInfos, Remove, TextCard, TextProductCard, TextProductP, Title, TitleCard, TotalPrice } from './style'

export function Home() {

  const basePath = './';
  const [mounted,setMounted] = useState(false)
  const [count, setCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Quantidade total de itens no carrinho
  const [selectedImage, setSelectedImage] = useState(basePath + 'image-product-1.jpg'); // Inicialize com o caminho da primeira imagem

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      const numberAmount = document.querySelector('.number-amount');
      const newTotalItems = totalItems + count;
      const empty = document.querySelector('.empty');
      const visibleCard = document.querySelector('.visible-card');
      setTotalItems(newTotalItems);
      numberAmount.classList.remove('hide');
      numberAmount.innerText = newTotalItems; // Atualiza o texto do number-amount com o novo total de itens
      setCount(0); // Reseta a quantidade selecionada para zero

      const deleteCard = document.querySelector('.delete');
      const checkout = document.querySelector('.checkout');
      const purchase = document.querySelector('.purchase');

      deleteCard.addEventListener('click', () => {
        setTotalItems(0);
        numberAmount.classList.add('hide');
        empty.classList.remove('hide');
        visibleCard.classList.add('hide');
      });

      checkout.addEventListener('click', () => {
        setTotalItems(0);
        numberAmount.classList.add('hide');
        visibleCard.classList.add('hide');
        purchase.classList.remove('hide');

        setTimeout(() => {
          purchase.classList.add('hide');
          empty.classList.remove('hide');
        }, 3000);
      });

      if (newTotalItems > 0) {
        empty.classList.add('hide');
        visibleCard.classList.remove('hide');
      };

    }
  };

  const handleImageClick = (thumbnailName) => {
    const mainImageName = thumbnailName.replace('-thumbnail', ''); // Remove o sufixo "-thumbnail" do nome do arquivo
    setSelectedImage(basePath + mainImageName);
  };

  useEffect(() => {
          
    if(mounted){

      const btnCart = document.querySelector('.btn-cart');
      const cart = document.querySelector('.cart');
      const principalImage = document.querySelector('.principal-image');
      const overlay = document.querySelector('.overlay');
      const imageCard = document.querySelector('.image-card');
      const btnCloseCard = document.querySelector('.btn-closecard');
      const btnMenuMobile = document.querySelector('.btn-menu-mobile');
      const menuMobile = document.querySelector('.menu-mobile');
      const btnCloseMenu = document.querySelector('.btn-close-menu');

      btnMenuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('hide');
      })

      btnCloseMenu.addEventListener('click', () => {
        menuMobile.classList.add('hide');
      })

      principalImage.addEventListener('click', () => {
        overlay.classList.remove('hide');
        imageCard.classList.remove('hide');
      })

      function closeImageCard() {
        overlay.classList.add('hide');
        imageCard.classList.add('hide');
      }
      
      document.addEventListener('click', (event) => {
        if (!imageCard.contains(event.target) && event.target !== principalImage) {
          closeImageCard();
        }
      });

      btnCloseCard.addEventListener('click', () => {
        closeImageCard();
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

  },[mounted])

  return (
   <Container>
    <NumberAmount className="number-amount hide">{totalItems}</NumberAmount>
    <MenuMobile className='menu-mobile hide'>
      <CloseMenu className='btn-close-menu' src='icon-close.svg'></CloseMenu>
      <MenuListMobile>
        <ItemMobile>Collections</ItemMobile>
        <ItemMobile>Men</ItemMobile>
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
      <PreviousMobile><img src='icon-previous.svg'></img></PreviousMobile>
      <NextMobile><img src='icon-next.svg'></img></NextMobile>
      <ProductImages>
        <PrincipalImage src={selectedImage} className='principal-image'></PrincipalImage>
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
        <TotalPrice>
          <Price>
            <NewPrice>$125.00</NewPrice>
            <Discount>50%</Discount>
          </Price>
          <OldPrice><s>$250.00</s></OldPrice>
        </TotalPrice>
        <Buy>
          <Count>
            <Remove src='icon-minus.svg' onClick={decrementCount}></Remove>
            <Amount>{count}</Amount>
            <Add src='icon-plus.svg' onClick={incrementCount}></Add>
          </Count>
          <ButtonAddToCard onClick={handleAddToCart}><img src='icon-cart.svg'></img> Add to cart</ButtonAddToCard>
        </Buy>
      </ProductInfos>
    </Product>
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
            <ImageCart src={selectedImage}></ImageCart>
            <TextProductCard>
              <TextProductP>Fall Limited Edition Sneakers</TextProductP>
              <TextProductP>$125.00 x {totalItems} <b>${125.00 * totalItems}.00</b></TextProductP>
            </TextProductCard>
          </ContentCard>
          <DeleteImage src='icon-delete.svg' className='delete'></DeleteImage>
        </ItensCard>
        <ButtonCheckout className='checkout'>Checkout</ButtonCheckout>
      </CardVisible>
    </Card>
        <div className="overlay hide">
          <ImageCard className='image-card hide'>
            <ImagePrincipalCard src={selectedImage}></ImagePrincipalCard>
            <Previous>
              <ImagePrevious src='icon-previous.svg'></ImagePrevious>
            </Previous>
            <Next>
              <ImageNext src='icon-next.svg'></ImageNext>
            </Next>
            <ImagesLine>
              <ImageLine src='image-product-1-thumbnail.jpg' className={selectedImage === basePath + 'image-product-1.jpg' ? 'selected' : ''} onClick={() => handleImageClick('image-product-1-thumbnail.jpg')}></ImageLine>
              <ImageLine src='image-product-2-thumbnail.jpg' className={selectedImage === basePath + 'image-product-2.jpg' ? 'selected' : ''} onClick={() => handleImageClick('image-product-2-thumbnail.jpg')}></ImageLine>
              <ImageLine src='image-product-3-thumbnail.jpg' className={selectedImage === basePath + 'image-product-3.jpg' ? 'selected' : ''} onClick={() => handleImageClick('image-product-3-thumbnail.jpg')}></ImageLine>
              <ImageLine src='image-product-4-thumbnail.jpg' className={selectedImage === basePath + 'image-product-4.jpg' ? 'selected' : ''} onClick={() => handleImageClick('image-product-4-thumbnail.jpg')}></ImageLine>
            </ImagesLine>
            <CloseCard className='btn-closecard'>
              <BtnCloseCard src='icon-close.svg'></BtnCloseCard>
            </CloseCard>
          </ImageCard>
        </div>
   </Container>
  )
}
