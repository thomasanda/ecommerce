import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinnner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionsOverviewWithSpinner isLoading={loading} />}
        />
        <Route
          path=":collectionId"
          element={<CollectionPageWithSpinnner isLoading={loading} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
