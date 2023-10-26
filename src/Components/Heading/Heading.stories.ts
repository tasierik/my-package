import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Heading',
    component: Heading,

} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        children: 'Heading example',
    },
};
