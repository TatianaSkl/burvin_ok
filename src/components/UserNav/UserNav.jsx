import { LinkNav, LinkNavText, NavUser } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  return (
    <NavUser>
      <LinkNavText to="/collections" onClick={onClose}>
        Колекції
      </LinkNavText>
      <LinkNav to="/collection-3" onClick={onClose}>
        ОСІНЬ-ЗИМА 2025
      </LinkNav>
      <LinkNav to="/collection-2" onClick={onClose}>
        ВЕСНА-ЛІТО 2025
      </LinkNav>
      <LinkNav to="/collection-1" onClick={onClose}>
        ОСІНЬ-ЗИМА 2024
      </LinkNav>
      <LinkNav to="/outlet" onClick={onClose}>
        АУТЛЕТ
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
