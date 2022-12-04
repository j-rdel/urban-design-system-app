import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UrbTypography from '.';
import Container from '../../storybook/Container';

export default {
  title: 'components/UrbTypography',
  component: UrbTypography,
  decorators: [
    (Story) => (
      <Container><Story/></Container>
    )
  ]
} as ComponentMeta<typeof UrbTypography>;

export const Basic: ComponentStory<typeof UrbTypography> = args => (
  <UrbTypography {...args} />
);

Basic.args = {
  
};
