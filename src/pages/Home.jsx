import React, { useEffect, useState } from 'react';
import Catergories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlockSkeleton';
import Pagination from '../components/pagination/index';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setItems, fetchPizzas } from '../redux/slices/pizzasSlice';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.category);
  const activeSort = useSelector((state) => state.filter.sort);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const items = useSelector((state) => state.pizzas.items);
  const { searchValue } = React.useContext(SearchContext);
  const sortTypes = ['rating', 'price', 'title'];

  const getPizzas = async () => {
    setIsLoading(true);
    try {
      dispatch(fetchPizzas({ currentPage, activeCategory, sortTypes, activeSort, searchValue }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getPizzas();
    console.log(items);
  }, [activeCategory, activeSort, searchValue, currentPage]);
  const pizzas = items.map((obj) => (
    <PizzaBlock
      id={obj.id}
      title={obj.title}
      price={obj.price}
      img={obj.imageUrl}
      sizes={obj.sizes}
      types={obj.types}
    />
  ));
  const skeletons = [...new Array(8)].map(() => <Skeleton />);
  return (
    <>
      <div class="container">
        <div class="content__top">
          <Catergories />
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination />
      </div>
    </>
  );
};

export default Home;
