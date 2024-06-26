import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ActiveCardImage, Add, Amount, AvatarImage, Brand, BtnCloseCard, ButtonAddToCard, ButtonCheckout, Buy, Card, CardPurchase, CardVisible, CartImage, CloseCard, CloseMenu, Container, ContentCard, Count, DeleteImage, Desc, Discount, Icons, ImageCard, ImageCart, ImageLine, ImageNext, ImagePrevious, ImagePrincipalCard, Images, ImagesLine, Item, ItemMobile, ItensCard, ItensCardEmpty, Menu, MenuList, MenuListMobile, MenuMobile, Nav, NewPrice, Next, NextMobile, NumberAmount, OldPrice, Previous, PreviousMobile, Price, PrincipalImage, Product, ProductImage, ProductImages, ProductInfos, Remove, TextCard, TextProductCard, TextProductP, Title, TitleCard, TotalPrice } from './style'
import logo from '../assets/logo.svg';
import iconcart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import adi2000 from '../assets/adi2000.avif';
import adi20002 from '../assets/adi20002.avif';
import adi20003 from '../assets/adi20003.avif';
import adi20004 from '../assets/adi20004.avif';
import suede from '../assets/suede.avif';
import suede2 from '../assets/suede2.avif';
import suede3 from '../assets/suede3.avif';
import suede4 from '../assets/suede4.avif';
import campus from '../assets/campus.avif';
import campus2 from '../assets/campus2.avif';
import campus3 from '../assets/campus3.avif';
import campus4 from '../assets/campus4.avif';
import knu from '../assets/knu.webp';
import knu2 from '../assets/knu2.webp';
import knu3 from '../assets/knu3.webp';
import knu4 from '../assets/knu4.webp';
import sapatilha from '../assets/sapatilha.webp';
import sapatilha2 from '../assets/sapatilha2.webp';
import sapatilha3 from '../assets/sapatilha3.webp';
import sapatilha4 from '../assets/sapatilha4.webp';
import bota from '../assets/bota.webp';
import bota2 from '../assets/bota2.webp';
import bota3 from '../assets/bota3.webp';
import bota4 from '../assets/bota4.webp';
import scarpin from '../assets/scarpin.webp';
import scarpin2 from '../assets/scarpin2.webp';
import scarpin3 from '../assets/scarpin3.webp';
import scarpin4 from '../assets/scarpin4.webp';
import iconDelete from '../assets/icon-delete.svg';
import iconPrevious from '../assets/icon-previous.svg';
import iconNext from '../assets/icon-next.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconClose from '../assets/icon-close.svg';


export function BuyPage() {

  const basePath = './';
  const [mounted,setMounted] = useState(false)
  const [count, setCount] = useState(0);
  const [totalItems, setTotalItems] = useState(0); // Quantidade total de itens no carrinho
  const [selectedImage, setSelectedImage] = useState(''); // Inicializa sem valor inicial
  const { id } = useParams(); // Utilize o hook useParams para obter o parâmetro da rota
  const [product, setProduct] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const activeCard = document.querySelector('.active-card');
  const navigate = useNavigate();

  function pageCollections() {
    navigate('/');
  }

  function pageMale() {
    navigate('/male');
  }

  function pageFemale() {
    navigate('/female');
  }

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
    setSelectedImage(thumbnailName);
  };

  function getImagePath(imageName) {
    switch (imageName) {
      case 'adi2000.avif':
        return adi2000;
      case 'suede.avif':
        return suede;
      case 'campus.avif':
        return campus;
      case 'knu.webp':
        return knu;
      case 'sapatilha.webp':
        return sapatilha;
      case 'bota.webp':
        return bota;
      case 'scarpin.webp':
        return scarpin;
      case 'adi20002.avif':
        return adi20002;
      case 'suede2.avif':
        return suede2;
      case 'campus2.avif':
        return campus2;
      case 'knu2.webp':
        return knu2;
      case 'sapatilha2.webp':
        return sapatilha2;
      case 'bota2.webp':
        return bota2;
      case 'scarpin2.webp':
        return scarpin2;
      case 'adi20003.avif':
        return adi20003;
      case 'suede3.avif':
        return suede3;
      case 'campus3.avif':
        return campus3;
      case 'knu3.webp':
        return knu3;
      case 'sapatilha3.webp':
        return sapatilha3;
      case 'bota3.webp':
        return bota3;
      case 'scarpin3.webp':
        return scarpin3;
      case 'adi20004.avif':
        return adi20004;
      case 'suede4.avif':
        return suede4;
      case 'campus4.avif':
        return campus4;
      case 'knu4.webp':
        return knu4;
      case 'sapatilha4.webp':
        return sapatilha4;
      case 'bota4.webp':
        return bota4;
      case 'scarpin4.webp':
        return scarpin4;
      default:
        return imageName; // Caso padrão, retorna o próprio nome da imagem (pode ser um caminho relativo ou URL)
    }
  }

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

      async function fetchProduct() {
        try {
          const response = await axios.get(`http://localhost:3000/products/${id}`);
          console.log(response.data); // Debug: Verifica o que está sendo retornado pela API
          setProduct(response.data);

          // Define selectedImage com product.image1 se product for definido
          if (response.data && response.data.image1) {
            setSelectedImage(getImagePath(response.data.image1));
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }

      btnMenuMobile.addEventListener('click', () => {
        menuMobile.classList.remove('hide');
      })

      btnCloseMenu.addEventListener('click', () => {
        menuMobile.classList.add('hide');
      })

      const openOverlay = () => {
        setOverlayVisible(true);
      };
      
      const closeOverlay = () => {
        setOverlayVisible(false);
      };

      //activeCard.addEventListener('click', openOverlay);
      
      document.addEventListener('click', (event) => {
        if (!imageCard.contains(event.target) && event.target !== principalImage) {
          closeOverlay();
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

      fetchProduct();

    }

    else{
        setMounted(true);
    }

  },[mounted, id])

  return (
   <Container>
    <NumberAmount className="number-amount hide">{totalItems}</NumberAmount>
    <MenuMobile className='menu-mobile hide'>
      <CloseMenu className='btn-close-menu' src={iconClose}></CloseMenu>
      <MenuListMobile>
        <ItemMobile onClick={pageCollections}>Collections</ItemMobile>
        <ItemMobile onClick={pageMale}>Men</ItemMobile>
        <ItemMobile onClick={pageFemale}>Women</ItemMobile>
        <ItemMobile>About</ItemMobile>
        <ItemMobile>Contact</ItemMobile>
      </MenuListMobile>
    </MenuMobile>
    <Nav>
      <Menu>
        <MenuList>
          <Item className='btn-menu-mobile'><img src={iconMenu}></img></Item>
          <Item className='logo'><img src={logo}></img></Item>
          <Item onClick={pageCollections}>Collections</Item>
          <Item onClick={pageMale}>Men</Item>
          <Item onClick={pageFemale}>Women</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </MenuList>
      </Menu>
      <Icons>
        <CartImage src={iconcart} className='btn-cart'></CartImage>
        <AvatarImage src={avatar}></AvatarImage>
      </Icons>
    </Nav>
    <hr></hr>
    <Product>
      <PreviousMobile><img src={iconPrevious}></img></PreviousMobile>
      <NextMobile><img src={iconNext}></img></NextMobile>
        {product && (
      <ProductImages>
        <ActiveCardImage className='active-card'>
          <PrincipalImage src={selectedImage} 
          className='principal-image'></PrincipalImage>
        </ActiveCardImage>
        <Images>
        <ProductImage
          src={getImagePath(product.image1)} 
          className={selectedImage === getImagePath(product.image1) ? 'selected' : ''}
          onClick={() => handleImageClick(getImagePath(product.image1))}
          />
        <ProductImage
          src={getImagePath(product.image2)} 
          className={selectedImage === getImagePath(product.image2) ? 'selected' : ''}
          onClick={() => handleImageClick(getImagePath(product.image2))}
          />
        <ProductImage
          src={getImagePath(product.image3)} 
          className={selectedImage === getImagePath(product.image3) ? 'selected' : ''}
          onClick={() => handleImageClick(getImagePath(product.image3))}
          />
        <ProductImage
          src={getImagePath(product.image4)} 
          className={selectedImage === getImagePath(product.image4) ? 'selected' : ''}
          onClick={() => handleImageClick(getImagePath(product.image4))}
          />
        </Images>
      </ProductImages>
        )}
      <ProductInfos>
        <Brand>Sneaker Company</Brand>
        <Title>{product ? product.name : ''}</Title>
        <Desc>{product ? product.description : ''}</Desc>
        <TotalPrice>
          <Price>
            <NewPrice>${product ? product.price : ''}.00</NewPrice>
            <Discount>50%</Discount>
          </Price>
          <OldPrice><s>$250.00</s></OldPrice>
        </TotalPrice>
        <Buy>
          <Count>
            <Remove src={minus} onClick={decrementCount}></Remove>
            <Amount>{count}</Amount>
            <Add src={plus} onClick={incrementCount}></Add>
          </Count>
          <ButtonAddToCard onClick={handleAddToCart}><img src={iconcart}></img> Add to cart</ButtonAddToCard>
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
        {product && (
          <ContentCard>
            <ImageCart src={
            product.image1 === 'adi2000.avif' ? adi2000 :
            product.image1 === 'suede.avif' ? suede :
            product.image1 === 'campus.avif' ? campus :
            product.image1 === 'knu.webp' ? knu :
            product.image1 === 'sapatilha.webp' ? sapatilha :
            product.image1 === 'bota.webp' ? bota :
            product.image1 === 'scarpin.webp' ? scarpin :
            product.image1
          } ></ImageCart>
            <TextProductCard>
              <TextProductP>{product.name}</TextProductP>
              <TextProductP>${product.price}.00 x {totalItems} <b>${125.00 * totalItems}.00</b></TextProductP>
            </TextProductCard>
          </ContentCard>
        )}
          <DeleteImage src={iconDelete} className='delete'></DeleteImage>
        </ItensCard>
        <ButtonCheckout className='checkout'>Checkout</ButtonCheckout>
      </CardVisible>
    </Card>
        <div className={`overlay ${overlayVisible ? '' : 'hide'}`}>
          <ImageCard className={`image-card ${overlayVisible ? '' : 'hide'}`}>
            <ImagePrincipalCard src={selectedImage}></ImagePrincipalCard>
            <Previous>
              <ImagePrevious src={iconPrevious}></ImagePrevious>
            </Previous>
            <Next>
              <ImageNext src={iconNext}></ImageNext>
            </Next>
            {product && (
              <ImagesLine>
              <ImageLine src={getImagePath(product.image1)} 
              className={selectedImage === getImagePath(product.image1) ? 'selected' : ''}
              onClick={() => handleImageClick(getImagePath(product.image1))}></ImageLine>
              <ImageLine src={getImagePath(product.image2)} 
              className={selectedImage === getImagePath(product.image2) ? 'selected' : ''}
              onClick={() => handleImageClick(getImagePath(product.image2))}></ImageLine>
              <ImageLine src={getImagePath(product.image3)} 
              className={selectedImage === getImagePath(product.image3) ? 'selected' : ''}
              onClick={() => handleImageClick(getImagePath(product.image3))}></ImageLine>
              <ImageLine src={getImagePath(product.image4)} 
              className={selectedImage === getImagePath(product.image4) ? 'selected' : ''}
              onClick={() => handleImageClick(getImagePath(product.image4))}></ImageLine>
            </ImagesLine>
            )}
            <CloseCard className='btn-closecard'>
              <BtnCloseCard src={iconClose}></BtnCloseCard>
            </CloseCard>
          </ImageCard>
        </div>
   </Container>
  )
}
