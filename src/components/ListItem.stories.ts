import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ListItem } from './ListItem';

const meta = {
    title: 'Example/ListItem',
    component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título',
        text: 'Subtitulo | Descrição',
        image: 'src/components/assets/barriga-logo.svg',
        imageAlt: 'Símbolo de um globo',
    },
};
