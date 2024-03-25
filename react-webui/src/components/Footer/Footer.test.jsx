import React from 'react';
import {render} from 'enzyme';
import {Footer} from './Footer';

describe('<Footer/>',() =>{
    it('should render Footer with correct markup',() =>{
        expect(render(<Footer />)).toMatchSnapshot();
    })
})