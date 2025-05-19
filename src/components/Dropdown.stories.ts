import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Dropdown } from './Dropdown';

const meta = {
    title: 'Example/Dropdown',
    component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        index: 0, 
        question: "Question?",
        answer: "Answer bla bla bla",
        isOpen: 1,
    },
};
