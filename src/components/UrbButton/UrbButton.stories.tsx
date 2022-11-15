import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UrbButton from '.';
import Container from '../../storybook/Container';

export default {
  title: 'components/UrbButton',
  component: UrbButton,
  decorators: [
    (Story) => (
      <Container><Story/></Container>
    )
  ]
} as ComponentMeta<typeof UrbButton>;

export const Basic: ComponentStory<typeof UrbButton> = args => (
  <UrbButton {...args} />
);

Basic.args = {
  
};
