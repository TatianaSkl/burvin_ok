import { Container } from 'components';
import { FlexIcon, Link, Text, Wrapper, WrapperFlex } from './Contacts.styled';
import { BsTelephoneFill } from 'react-icons/bs';
import icon from 'images/sprite.svg';

export default function Contacts() {
  return (
    <Wrapper>
      <Container>
        <Text>
          Для додаткової інформації,
          <br />
          фото, замірами, звертайтесь, будьласка:
        </Text>
        <WrapperFlex>
          <FlexIcon>
            <BsTelephoneFill />
            <svg>
              <use href={icon + '#icon-telegram'}></use>
            </svg>
            <svg>
              <use href={icon + '#icon-viber'}></use>
            </svg>
            <svg>
              <use href={icon + '#icon-whatsapp'}></use>
            </svg>
          </FlexIcon>
          <Link href="tel:+380974465149">+38 097 446 51 49</Link>
        </WrapperFlex>
        <WrapperFlex>
          <svg width="20" height="20">
            <use href={icon + '#icon-gmail'}></use>
          </svg>
          <Link href="mailto:burvinkiev@ukr.net">burvinkiev@ukr.net</Link>
        </WrapperFlex>
        <div>
          <Text>Ми у соц.мережах</Text>
          <Link
            href="https://www.instagram.com/burvin_ok/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <svg width="20" height="20">
              <use href={icon + '#icon-instagram'}></use>
            </svg>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
}
