import Image from "next/image"
import { Text } from "./Text"

export const ListItem = ({ title, text, image, imageAlt }: {
    title: string
    text: string
    image: string
    imageAlt: string
}) => {
    return (
        <div className="flex flex-col items-center">
            <Image
                aria-hidden
                src={`/${image}`}
                alt={imageAlt}
                width={230}
                height={230}
            />
            <Text text={title} Tag='h3' />
            <Text text={text} Tag='p' />
        </div>
    )
}
