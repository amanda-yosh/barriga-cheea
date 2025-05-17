export const Container = ({ children, isCol }: {
    children: React.ReactNode,
    isCol?: boolean
}) => {
    return (
        <section className={`mr-32 ml-32 mt-11 mb-11 flex ${isCol && 'flex-col'}`}>
            {children}
        </section>
    )
}