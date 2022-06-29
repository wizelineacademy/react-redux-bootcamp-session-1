import { connect } from 'react-redux';
import { AppState } from 'src/config/store';
import FeaturedBanner from './FeaturedBanner';

const mapStateToProps = (state: AppState, ownProps: any) => {
    const { featuredBanner } = state;
    const { movie } = featuredBanner;

    return {
        movie,
        ...ownProps,
    };
};

export default connect(mapStateToProps)(FeaturedBanner);
