import React from "react"
//import ReactCSSTransitionGroup from 'react-transition-group';

import Grid from '@material-ui/core/Grid';

// Components
import Thumbnail from './Thumbnail.js';

// Helpers
import useWindowSize from './useWindowSize.js';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Grid container spacing={0} justify="space-around">
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
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            title="Future of Work"
            category="Economics"
          />
        </Grid>
      </Grid>
    </div>
  )
}
 
export default Projects;