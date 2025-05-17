import type { Meta, StoryObj } from '@storybook/nextjs-vite';


import { AccessibilityBar } from './AccessibilityBar';

const meta = {
  title: 'Example/AccebilityBar',
  component: AccessibilityBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { hrefs: ["#overview",""] },
} satisfies Meta<typeof AccessibilityBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hrefs: ["#overview",""],
  },
};
