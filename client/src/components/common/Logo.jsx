import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="500" fontSize="1.7rem">
    Movie<span style={{ color: theme.palette.primary.main }}>
     <span style={{}}>App</span>
   </span>
 </Typography>
  );
};

export default Logo;