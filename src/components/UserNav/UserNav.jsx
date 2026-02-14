import { LinkNav, LinkNavText, NavUser } from './UserNav.styled';
import data from 'bd/data.json';

export const UserNav = ({ onClose }) => {
  return (
    <NavUser>
      <LinkNavText to="/collections" onClick={onClose}>
        Колекції
      </LinkNavText>
      <LinkNav to={data.collectionThree.slug} onClick={onClose}>
        {data.collectionThree.title}
      </LinkNav>
      <LinkNav to={data.collectionTwo.slug} onClick={onClose}>
        {data.collectionTwo.title}
      </LinkNav>
      <LinkNav to={data.collectionOne.slug} onClick={onClose}>
        {data.collectionOne.title}
      </LinkNav>
      <LinkNav to={data.outlet.slug} onClick={onClose}>
        {data.outlet.title}
      </LinkNav>
      <LinkNav to="/favorites" onClick={onClose}>
        ВИБРАНЕ
      </LinkNav>
      <LinkNavText to="/news" onClick={onClose}>
        Новини
      </LinkNavText>
      <LinkNavText to="/contacts" onClick={onClose}>
        Контакти
      </LinkNavText>
    </NavUser>
  );
};
