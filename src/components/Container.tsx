export const Container = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <section className="mr-32 ml-32 mt-11 mb-11 flex">
            {children}
        </section>
    )
}