import React from 'react';

// sizes
// 88px titulo das secoes
// 18px textos num geral

export interface TextProps {
    Tag: React.ElementType,
    text: string,
}

export const Text = ({ Tag, text }: TextProps) => {
    return (
        <Tag className=''>
            {text}
        </Tag>
    );
}
