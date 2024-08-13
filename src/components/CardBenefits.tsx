interface Props {
    description: string,
    title: string,
    children: React.ReactNode
}

const CardBenefits: React.FC<Props> = ({description, title, children }) => {
    return (
        <aside className="font-secondary w-full max-[800px]:bg-extra-light-gray max-[800px]:rounded-md max-[800px]:p-8 flex flex-col items-center text-center justify-center px-8">            
            {children}
            <h3 className="max-sm:text-2xl mt-3 mb-1 text-[20px] font-medium">{title}</h3>
            <p className="max-sm:text-xl text-rat-gray text-medium">{description}</p>
        </aside>
    );
};

export default CardBenefits;