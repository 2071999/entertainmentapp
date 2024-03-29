import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";

const HomePage = () => {
  return (
    <>
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Trending">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

     
      </Box>
    </>
  );
};

export default HomePage;