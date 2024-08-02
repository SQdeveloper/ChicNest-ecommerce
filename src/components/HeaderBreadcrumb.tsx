const HeaderBreadcrumb = ({direction}: {direction:string}) => {
    return (
        <section className="flex justify-center items-center text-center w-full h-60 bg-cover bg-center bg-no-repeat bg-header">
            <h2 className="text-white text-3xl font-primary">Home / {direction}</h2>
        </section>
    );
};

export default HeaderBreadcrumb;