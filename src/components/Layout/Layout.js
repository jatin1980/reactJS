import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './Header';
import Navigation from '../Navigation/Navigation';
const layout = (props) => {
    return (
        <Grid>
        <Row>
           
            <Navigation></Navigation>
        </Row>
        <main>
            {props.children}
        </main>
    </Grid>
    )
}
export default layout;