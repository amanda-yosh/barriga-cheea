import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react";

export const ProductCard = ({ title, text, image, imageAlt, validity, releaseTime }: {
    title: string
    text?: string
    image: string
    imageAlt: string
    validity: string
    releaseTime: string
}) => {
    return (
        <li className="flex items-start gap-4 rounded-xl shadow-md p-4 bg-white max-w-xl">
            <div className="min-w-[100px]">
                <Image
                    src={`/${image}`}
                    width={100}
                    height={100}
                    alt={imageAlt}
                    className="rounded-md object-cover"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                </h2>
                <p className="text-sm text-gray-600">
                    {text}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span><em>Validade: {validity}</em></span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span><em>Libera em: {releaseTime}</em></span>
                    </div>
                </div>
            </div>
        </li>
    )
}
