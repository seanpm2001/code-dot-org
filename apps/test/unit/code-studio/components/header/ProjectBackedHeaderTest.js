import React from 'react';
import {shallow} from 'enzyme'; // eslint-disable-line no-restricted-imports

import ProjectBackedHeader from '@cdo/apps/code-studio/components/header/ProjectBackedHeader';

describe('ProjectHeader', () => {
  it('renders', () => {
    shallow(<ProjectBackedHeader />);
  });
});
