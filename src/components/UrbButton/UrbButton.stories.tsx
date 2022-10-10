import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UrbButton from '.';

export default {
  title: 'components/UrbButton',
  component: UrbButton,
} as ComponentMeta<typeof UrbButton>;

export const Basic: ComponentStory<typeof UrbButton> = args => (
  <UrbButton {...args} />
);

Basic.args = {

};
