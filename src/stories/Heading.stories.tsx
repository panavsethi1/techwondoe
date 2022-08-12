import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading from './../components/Heading/Heading';

export default {
	component: Heading,
} as Meta;

export const Primary: Story = (args) => <Heading {...args} />;
Primary.args = {
	label: 'Heading',
	variant: 'primary',
};

export const Secondary: Story = (args) => <Heading {...args} />;
Secondary.args = {
	label: 'Heading',
	variant: 'secondary',
};

export const White: Story = (args) => <Heading {...args} />;
White.args = {
	label: 'Heading',
	variant: 'white',
};
