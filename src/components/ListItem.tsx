import Image from "next/image"
import { Text } from "./Text"

export const ListItem = ({ title, text, image, imageAlt, isCircle }: {
    title: string
    text?: string
    image: string
    imageAlt: string
    isCircle?: boolean
}) => {
    return (
        <li className="flex flex-col items-center">
            <Image
                aria-hidden
                className={isCircle ? `rounded-full` : ''}
                src={`/${image}`}
                alt={imageAlt}
                width={230}
                height={230}
            />
            <Text text={title} Tag='h3' />
            {text && <Text text={text} Tag='p' />}
        </li>
    )
}
