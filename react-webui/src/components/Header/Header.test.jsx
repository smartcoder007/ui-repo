import React from 'react';
import {render} from 'enzyme';
import {Header} from './Header';

describe('<Header/>',() =>{
    it('should render Footer with correct markup',() =>{
        expect(render(<Footer />)).toMatchSnapshot();
    })
})