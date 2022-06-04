import { FunctionComponent, useEffect } from 'react';
import _ from 'lodash';
import { Category, CategoriesFetcherHandler } from '../types';
import movieRoutes from '../../utils/movieRoutes';
import HTTP from '../../utils/http';

interface CategoriesFetcherProps {
  handleFetchedCategories: CategoriesFetcherHandler;
}

const CategoriesFetcher: FunctionComponent<CategoriesFetcherProps> = ({ handleFetchedCategories }) => {
  const movieCategories = _.orderBy(movieRoutes, ['order'], ['asc']);

  useEffect(() => {
    const fetchCategory = async (category: string, type: string, url: string): Promise<Category> => {
      const { results } = (await HTTP.get(url)).data;

      return {
        name: category,
        type,
        movies: results,
      };
    }
    
    const categories: Promise<Category>[] = movieCategories.map(
      ({ category, type = '', url }) => fetchCategory(category, type, url)
    );

    Promise.all(categories).then((categories) => handleFetchedCategories(categories));
  }, [])

  return null;
};

export default CategoriesFetcher;
