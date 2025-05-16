import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from './Text';

const meta = {
    title: 'Example/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
    args: {
        Tag: 'p',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
};
