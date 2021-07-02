import React from "react"
//import ReactCSSTransitionGroup from 'react-transition-group';

import { Grid, GridList } from '@material-ui/core';

// Components
import Thumbnail from './Thumbnail.js';

// Helpers
// import useWindowSize from './useWindowSize.js';
 
function Projects() {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <GridList cellHeight={760} cols={2} >
        <Grid item sm>
          <Thumbnail
            link="/proj"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            title="Portfolio Website"
            category="Website"
          />
        </Grid>

        <Grid item sm={5}>
          <Thumbnail
            link="/proj1"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            title="Future of Work"
            category="Economics"
          />
        </Grid>

        <Grid item sm={5}>
          <Thumbnail
            link="/proj1"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            title="Future of Work"
            category="Economics"
            />
        </Grid>
      </GridList>
    </div>
  )
}
 
export default Projects;