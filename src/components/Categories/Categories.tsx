import React, { FunctionComponent } from 'react';
import MovieRow from '../MovieRow';
import { Category, ShowToastHandler } from '../types';

interface CategoriesProps {
  categories: Category[];
  setShowToastHandler: ShowToastHandler;
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories, setShowToastHandler }) => {
  return (
    <>
      {categories.length > 0 && categories.map(({ movies, name, type }) => {
        return <MovieRow setShowToastHandler={setShowToastHandler} key={name} category={name} movies={movies} type={type} />;
      })}
    </>
  );
};

export default Categories;
