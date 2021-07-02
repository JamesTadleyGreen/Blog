import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab/';
import { Typography } from '@material-ui/core';

import TimelineCard from './TimelineCard.js';

export default function TimeLine() {
    return(
        <Timeline align="alternate">

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent align="left">
                    <TimelineCard 
                    title="Title"
                    subtitle="Subtitle"
                    desc="A small little description of the project and this feels like it should be in the backend."
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent align="left">
                    <TimelineCard 
                    title="Title"
                    subtitle="Subtitle"
                    desc="A small little description of the project and this feels like it should be in the backend."
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent align="left">
                    <TimelineCard 
                    title="Title"
                    subtitle="Subtitle"
                    desc="A small little description of the project and this feels like it should be in the backend."
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent align="left">
                    <TimelineCard 
                    title="Title"
                    subtitle="Subtitle"
                    desc="A small little description of the project and this feels like it should be in the backend."
                    img="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    />
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent align="left">
                    <TimelineCard 
                    title="Title"
                    subtitle="Subtitle"
                    desc="A small little description of the project and this feels like it should be in the backend."
                    />
                </TimelineContent>
            </TimelineItem>

      </Timeline>
    );
}