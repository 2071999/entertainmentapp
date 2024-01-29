// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
// import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SearchIcon from '@mui/icons-material/Search';

const main = [
  {
    display: <HomeIcon />,
    path: "/",
    state: "home"
  },
  {
    display: <MovieIcon />,
    path: "/movie",
    state: "movie"
  },
  {
    display: <LocalMoviesIcon />,
    path: "/tv",
    state: "tv"
  },
  {
    display: <SearchIcon />,
    path: "/search",
    state: "search"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <FavoriteBorderOutlinedIcon />,
    state: "favorite"
  },
  // {
  //   display: "reviews",
  //   path: "/reviews",
  //   icon: <RateReviewOutlinedIcon />,
  //   state: "reviews"
  // },
  // {
  //   display: "password update",
  //   path: "/password-update",
  //   icon: <LockResetOutlinedIcon />,
  //   state: "password.update"
  // }
];

const menuConfigs = { main, user };

export default menuConfigs;