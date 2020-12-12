import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
// import SHOP_DATA from './shop.data.jsx';
// import PreviewCollection from '../../components/preview-collection/preview-collection.component';
// import { selectCollections } from '../../redux/shop/shop.selectors';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

const ShopPage = ( { match, location, history }) => (
    <div className= 'shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} 
                   component={CollectionPage}
            />
        </div>
);

export default ShopPage;