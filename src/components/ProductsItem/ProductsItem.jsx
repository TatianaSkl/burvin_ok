import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectProducts } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';
import {
  Image,
  Item,
  Text,
  Wrap,
  WrapperFlex,
  WrapperFoto,
  WrapperModel,
  Icon,
  IconPlus,
  WrapperText,
  TextSpan,
  WrapperPct,
  IconVideo,
  SpanDescription,
  TextDescription,
} from './ProductsItem.styled';

export const ProductsItem = ({
  id,
  article,
  name,
  options,
  price,
  originalPrice,
  discount,
  fotos,
  video,
  compound,
  description,
  season,
}) => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState({ type: null, props: {} });
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const favorites = useSelector(selectFavorites);
  const products = useSelector(selectProducts);

  const isAdvertsInFavorites = favorites.find(product => product._id === id);

  const exchangeRate = season.includes('vl24') ? 40 : 39;

  const priceUa = Math.ceil((price * 2 * exchangeRate) / 100) * 100;
  const originalPriceUa = Math.ceil((originalPrice * 2 * 39) / 100) * 100;
  const priceSale = Math.ceil((originalPriceUa - (originalPriceUa * discount) / 100) / 100) * 100;

  const handleFavorite = () => {
    if (!isAdvertsInFavorites) {
      const product = products.find(product => product._id === id);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(id));
    }
    setIsFavorite(!isFavorite);
  };

  const openModal = (type, props = {}) => {
    document.body.style.overflow = 'hidden';
    setModalState({ type, props });
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalState({ type: null, props: {} });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Item>
        <WrapperFoto>
          <Image src={fotos[0]} alt={name} loading="lazy" />
          <Icon isAdvertsInFavorites={isAdvertsInFavorites} onClick={handleFavorite}>
            <AiFillHeart />
          </Icon>
          {video && (
            <IconVideo onClick={() => openModal('video', { video })}>
              <IoLogoYoutube />
            </IconVideo>
          )}
          <IconPlus onClick={() => openModal('fotos', { article, fotos })}>
            <FaSearchPlus />
          </IconPlus>
        </WrapperFoto>
        <WrapperFlex>
          <Wrap>{name}</Wrap>
          <WrapperModel> {article}</WrapperModel>
          {discount ? (
            <div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>{priceSale} грн</p>
              <div style={{ display: 'flex' }}>
                <TextSpan>{originalPriceUa} грн</TextSpan>
                <WrapperPct>- {discount} %</WrapperPct>
              </div>
            </div>
          ) : (
            <div>{priceUa} грн</div>
          )}
        </WrapperFlex>
        <WrapperText>
          <div>
            {options.map(option => (
              <Text key={`${option.color}-${option.sizes}`}>
                <span style={{ color: 'black' }}>Колір : </span>
                {option.color}
              </Text>
            ))}
          </div>
          <div>
            {options.map(option => (
              <Text key={`${option.color}-${option.sizes}`}>
                <span style={{ color: 'black' }}>Розмір : </span>
                {option.sizes.join(', ')}
              </Text>
            ))}
          </div>
        </WrapperText>
        <Text style={{ textAlign: 'center' }}>
          <span style={{ color: 'black' }}>Склад : </span>
          {compound}
        </Text>
        {description && (
          <>
            <SpanDescription onClick={toggleVisibility}>Опис...</SpanDescription>

            {isVisible && <TextDescription>{description}</TextDescription>}
          </>
        )}
      </Item>
      {modalState.type && (
        <Modal type={modalState.type} props={modalState.props} onClose={closeModal} />
      )}
    </>
  );
};
