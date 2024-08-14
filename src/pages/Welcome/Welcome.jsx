import { useNavigate } from 'react-router-dom';
import { ButtonGo, WrapperWelcom } from './Welcome.styled';
import { useEffect, useState } from 'react';
import { getRandomImage } from 'utils/getRandomImage';

export default function Welcome() {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage);

  const handleGo = () => {
    navigate('/collection-4');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(getRandomImage);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <WrapperWelcom style={{ backgroundImage: `url(${backgroundImage})` }} />
      <ButtonGo onClick={handleGo}>ДИВИТИСЯ КОЛЕКЦІЮ ОСІНЬ-ЗИМА 2024</ButtonGo>
    </>
  );
}
