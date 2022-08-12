import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
	component: Button,
} as Meta;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
	label: 'Learn More',
	variant: 'primary',
	color: '#fff',
	bg: '#e6692e',
};

export const Secondary: Story = (args) => <Button {...args} />;
Secondary.args = {
	label: 'Learn More',
	variant: 'secondary',
	color: '#e6692e',
	bg: '#fff',
};
