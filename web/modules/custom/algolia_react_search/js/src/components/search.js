import algoliasearch from "algoliasearch/lite";
import React, { Component } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from "react-instantsearch-dom";

import PropTypes from "prop-types";
import "./App.css";

const searchClient = algoliasearch(
  "1OR5CCCN6Q",
  "a282e04d1d3fce3ac096fa6ee3014ecb"
);

class Search extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch Algolia Search</h1>
        <InstantSearch indexName="articles" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />

            <h2>Categories</h2>
            <RefinementList attribute="catrgory" />
            <h2>Tags</h2>
            <RefinementList attribute="tags" />

            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <img
        className="hit-image"
        src={props.hit.image}
        align="left"
        alt={props.hit.title}
      />
      <div className="hit-title">
        <Highlight attribute="title" hit={props.hit} />
      </div>
      {/* <div className="hit-body">
        <Highlight attribute="body" hit={props.hit} />
      </div> */}
      <div className="hit-catrgory">{props.hit.catrgory}</div>
      {/* <div className="hit-tags">{props.hit.tags}</div> */}
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
