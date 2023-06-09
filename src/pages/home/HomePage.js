import { Wrapper, HomePageImage } from 'pages/home/HomePage.styled';
import { NavLink } from 'components/navigation/Navigation.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <NavLink to="/contacts">
        <HomePageImage></HomePageImage>
      </NavLink>
    </Wrapper>
  );
};

export default HomePage;
