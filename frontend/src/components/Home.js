import React from "react";
import {Gallery, GalleryItem} from "@patternfly/react-core";
import {CardView} from "./Home/Card/CardView";

export const Home = () => {

  return (
      <Gallery hasGutter>
        <GalleryItem>
            <CardView name={"AirFlow"} body={"AirFlow"} />
        </GalleryItem>
        <GalleryItem>
            <CardView name={"ProwCI"} body={"ProwCI"} />
        </GalleryItem>
        <GalleryItem>
            <CardView name={"Summary"} body={"Summary"} />
        </GalleryItem>
      </Gallery>
  )
}