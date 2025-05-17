import { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react"

interface AccessibilityBarProps {
    hrefs?: string[]
}

const sizes = ['text-access-small', 'text-access-base', 'text-access-large'];

export const AccessibilityBar:FunctionComponent<AccessibilityBarProps> = (
    {hrefs}
) => {

    const [sizeIndex, setSizeIndex] = useState(1);

    /**
     * * Função para alternar o contraste alto
     * @description Altera o contraste do corpo do documento
     * @returns void
     */
    const toggleHighContrast = () => {
        document.body.classList.toggle('high-contrast');
    }

    /**
     * * Função para aumentar o tamanho da fonte
     * @description Aumenta o tamanho da fonte do corpo do documento
     * @returns void
     */
    const increaseFontSize = useCallback(() => sizeIndex < sizes.length - 1 ? setSizeIndex(sizeIndex + 1) : sizes.length - 1, [sizeIndex]);

    /**
     * * Função para diminuir o tamanho da fonte
     * @description Diminui o tamanho da fonte do corpo do documento
     * @returns void
     */
    const decreaseFontSize = useCallback(() => sizeIndex > 0 ? setSizeIndex(sizeIndex - 1) : 0, [sizeIndex]);

    /**
     * * Função para alterar o tamanho da fonte
     * @description Altera o tamanho da fonte do corpo do documento
     * @returns void
     */
    useEffect(() => {
        const body = document.body;
        body.classList.remove(...sizes);
        body.classList.add(sizes[sizeIndex]);
    }, [sizeIndex]);


    return (
        <div className="bg-gray-300 w-full">
            <div className="container mx-auto">
                <div className="text-black flex flex-wrap items-center justify-between px-4 py-2 text-sm gap-6">
                    <div className="flex flex-wrap gap-4">
                        <a href={(hrefs ?? [])[0]} className="underline text-[#484848] hover:text-gray-700">Ir para conteúdo [1]</a>
                        <a href={(hrefs ?? [])[1]}  className="underline text-[#484848] hover:text-gray-700">Ir para menu [2]</a>
                        <a href={(hrefs ?? [])[2]}  className="underline text-[#484848] hover:text-gray-700">Ir para o rodapé [3]</a>
                        <a href={(hrefs ?? [])[3]}  className="underline text-[#484848] hover:text-gray-700">Ir para Acessibilidade [4]</a>
                    </div>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <div className="text-[#484848] hover:text-gray-700 flex gap-2">
                            <button className="hover:underline  cursor-pointer" onClick={increaseFontSize}>A+</button>
                            <span>|</span>
                            <button className="hover:underline  cursor-pointer" onClick={decreaseFontSize}>A-</button>
                        </div>
                        <button className="hover:underline cursor-pointer text-[#484848] hover:text-gray-700 hover:underline" onClick={toggleHighContrast}>Alto contraste</button>
                    </div>
                </div>
            </div>
        </div>
    )

}