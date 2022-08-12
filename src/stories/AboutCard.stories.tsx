import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import AboutCard from '../components/About/AboutCard';

export default {
	component: AboutCard,
} as Meta;

export const Primary: Story = (args) => <AboutCard {...args} />;
Primary.args = {
	itemTitle: 'Highly experienced Team',
	itemDesc:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .',
};
