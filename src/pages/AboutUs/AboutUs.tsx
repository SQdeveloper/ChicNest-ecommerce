import BenefitsSection from "../../components/BenefitsSection";
import ClientsSection from "../../components/ClientsSection";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import InstragramSection from "../../components/InstragramSection";
import QuestionsSection from "../../components/QuestionsSection";
import ButtonStyle from "../../components/ui/ButtonStyle";

const AboutUs = () => {
    return (
        <div>
            <HeaderBreadcrumb direction="About Us"/>
            <div className="max-md:px-5 max-lg:px-8 max-lg:mt-4 max-xl:mt-6 max-w-[1280px] mx-auto px-10 mt-12">
                <BenefitsSection/>
                <div className="max-lg:mt-5 max-xl:grid-cols-1 grid grid-cols-2 gap-8 mt-12 items-center">
                    <img 
                        src="../../src/assets/images/model-about.jpg" 
                        alt="bg-model" 
                        className="rounded-xl"
                    />
                    <aside>
                        <h2 className="text-4xl font-primary mb-4">Our Vision</h2>
                        <p className="max-lg:text-xl mb-6 font-secondary">Ser la joyería de referencia a nivel global, reconocida por nuestra capacidad para fusionar artesanía tradicional con diseños innovadores. Nos dedicamos a ofrecer joyas que no solo embellecen, sino que también cuentan historias y celebran momentos especiales en la vida de nuestros clientes. Aspiramos a crear una experiencia única y personalizada, destacándonos por nuestra calidad excepcional, sostenibilidad y compromiso con la excelencia en el servicio. Nuestra meta es enriquecer la vida de las personas a través de joyas que reflejen su individualidad y estilo, mientras promovemos prácticas éticas y responsables en cada aspecto de nuestra operación.</p>
                        <ButtonStyle/>
                    </aside>
                </div>
                <div className="mt-16">
                    <ClientsSection/>
                </div>
                <section className="mt-16 text-center">
                    <span className="max-lg:text-xl text-rat-gray font-secondary">Our Team</span>
                    <h2 className="mt-3 font-primary text-4xl">Where Expertise</h2>
                    <div className="max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:gap-4 grid grid-cols-4 gap-8 mt-10">
                        <div className="flex flex-col gap-4 ">
                            <img 
                                className="object-top aspect-square rounded-md w-full object-cover" 
                                src="../../src/assets/workers/Ernie_RPA_2021.jpg" 
                                alt="person" 
                            />
                            <aside>
                                <h3 className="max-md:text-2xl font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="max-md:text-xl font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img 
                                className="object-top aspect-square rounded-xl w-full object-cover" 
                                src="../../src/assets/workers/Merly_RPA_2021.jpg" 
                                alt="person" 
                            />
                            <aside>
                                <h3 className="max-md:text-2xl font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="max-md:text-xl font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img 
                                className="object-top aspect-square rounded-xl w-full object-cover" 
                                src="../../src/assets/workers/Nueva_foto_de_Andrea.jpg" 
                                alt="person" 
                            />
                            <aside>
                                <h3 className="max-md:text-2xl font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="max-md:text-xl font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img 
                                className="object-top aspect-square rounded-xl w-full object-cover" 
                                src="../../src/assets/workers/Silvana_RPA_2021.jpg" 
                                alt="person" 
                            />
                            <aside>
                                <h3 className="max-md:text-2xl font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="max-md:text-xl font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-16">
                <QuestionsSection/>
            </div>            
            <div className="mb-12 max-[600px]:mx-5 max-[600px]:mt-12 max-[1280px]:mx-12 max-w-[1280px] mx-auto mt-16">
                <InstragramSection/>
            </div>
        </div>
    );
};

export default AboutUs;