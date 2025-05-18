import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProductCard } from './ProductCard';

const meta = {
    title: 'Example/ProductCard',
    component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Título (lista de itens)',
        text: 'Subtitulo | Descrição',
        image: 'src/components/assets/product-sample.png',
        imageAlt: 'Símbolo de um globo',
        validity: '01/01/2026',
        releaseTime: '11 horas'
    },
};
