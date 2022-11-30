import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UrbGradientButton from '.';
import Container from '../../storybook/Container';

export default {
  title: 'components/UrbGradientButton',
  component: UrbGradientButton,
  decorators: [
    (Story) => (
      <Container><Story/></Container>
    )
  ]
} as ComponentMeta<typeof UrbGradientButton>;

export const Basic: ComponentStory<typeof UrbGradientButton> = args => (
  <UrbGradientButton {...args} />
);

Basic.args = {
  
};
