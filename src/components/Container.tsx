export const Container = ({ children, isCol, bgColor }: {
    children: React.ReactNode,
    bgColor?: string,
    isCol?: boolean
}) => {
    return (
        <section className={`min-h-[620px] mr-32 ml-32 mt-11 mb-11 flex ${isCol && 'flex-col'} ${bgColor && bgColor}`}>
            {children}
        </section>
    )
}