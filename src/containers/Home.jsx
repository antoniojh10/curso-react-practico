import React from 'react';

// Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// Hooks
import useInitialState from '../hooks/useInitialState';

// Styles
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <React.Fragment>
      <Search />

      {initialState.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist?.map((trend) => (
              <CarouselItem key={trend.id} {...trend} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends?.map((trend) => (
            <CarouselItem key={trend.id} {...trend} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState.originals?.map((trend) => (
            <CarouselItem key={trend.id} {...trend} />
          ))}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

export default Home;
