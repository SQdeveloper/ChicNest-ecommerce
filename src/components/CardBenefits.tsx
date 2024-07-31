interface Props {
    description: string,
    title: string,
    children: React.ReactNode
}

const CardBenefits: React.FC<Props> = ({description, title, children }) => {
    return (
        <aside className="font-secondary flex flex-col items-center justify-center px-8">            
            {children}
            <h3 className="mt-3 mb-1 text-[20px] font-medium">{title}</h3>
            <p className="text-rat-gray text-medium">{description}</p>
        </aside>
    );
};

export default CardBenefits;