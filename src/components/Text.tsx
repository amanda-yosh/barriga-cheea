import React from 'react';

export interface TextProps {
    Tag: React.ElementType,
    text: string,
    size?: 'display' | 'sub-title' | 'regular' | 'regular-plus'
}

export const Text = ({ Tag, text, size }: TextProps) => {
    const sizes = {
        display: 'text-8xl',
        'sub-title': 'text-4xl',
        regular: 'text-lg',
        'regular-plus': 'text-xl',
    }

    return (
        <Tag className={sizes[size || 'regular']}>
            {text}
        </Tag>
    );
}
