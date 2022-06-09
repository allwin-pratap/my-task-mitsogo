
import { styled } from '@mui/material/styles';

export default function IconUpArrow() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage: `url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height: 25,
    width: 20,
    backgroundPosition: '-226px -35px',
  }));;
  return (
    <IconMenu />
  );
}
