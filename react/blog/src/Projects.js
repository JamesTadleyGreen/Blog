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
      <Grid container spacing={3} justify="space-around">
        <Grid item xs>
          <Thumbnail
            link="/proj"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            title="Portfolio Website"
            category="Website"
            height={useWindowSize()[1]}
          />
        </Grid>

        <Grid item sm={5}>
          <Thumbnail
            link="/proj1"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            title="Future of Work"
            category="Economics"
            width="10"
            height="10"
          />
        </Grid>
      </Grid>
    </div>
  )
}
 
export default Projects;