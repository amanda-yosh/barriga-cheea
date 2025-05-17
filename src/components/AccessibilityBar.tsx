import { FunctionComponent } from "react"

interface AccessibilityBarProps {
    hrefs?: string[]
}


export const AccessibilityBar:FunctionComponent<AccessibilityBarProps> = (
    {hrefs}
) => {

    return (
        <div className="bg-gray-300 text-black flex flex-wrap items-center justify-between px-4 py-2 text-sm gap-6 w-full">
            <div className="flex flex-wrap gap-4">
                <a href={(hrefs ?? [])[0]} className="underline text-[#484848] hover:text-gray-700">Ir para conteúdo [1]</a>
                <a href={(hrefs ?? [])[1]}  className="underline text-[#484848] hover:text-gray-700">Ir para menu [2]</a>
                <a href={(hrefs ?? [])[2]}  className="underline text-[#484848] hover:text-gray-700">Ir para o rodapé [3]</a>
                <a href={(hrefs ?? [])[3]}  className="underline text-[#484848] hover:text-gray-700">Ir para Acessibilidade [4]</a>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
                <div className="cursor-pointer text-[#484848] hover:text-gray-700 flex gap-2">
                    <button className="hover:underline  cursor-pointer">A+</button>
                    <span>|</span>
                    <button className="hover:underline  cursor-pointer">A-</button>
                </div>
                <button className="hover:underline cursor-pointer text-[#484848] hover:text-gray-700 hover:underline">Alto contraste</button>
            </div>
        </div>
    )

}