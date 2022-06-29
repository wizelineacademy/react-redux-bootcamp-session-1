import { connect } from 'react-redux';
import { fetchFeaturedBanner } from 'src/config/FeaturedBanner/actions';
import PromotedMovieFetcher from './PromotedMovieFetcher';

const mapDispatchToProps = {
    handlePromotedMovie: fetchFeaturedBanner
};

export default connect(null, mapDispatchToProps)(PromotedMovieFetcher);
