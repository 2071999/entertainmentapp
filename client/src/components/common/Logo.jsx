import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
    Alma<span style={{ color: theme.palette.primary.main }}>
     <span style={{ borderBottom: '2px solid red' }}>Better</span>
   </span>
 </Typography>
  );
};

export default Logo;