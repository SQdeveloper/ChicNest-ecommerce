import Acordeon from "../../components/Acordeon";
import BenefitsSection from "../../components/BenefitsSection";
import ClientsSection from "../../components/ClientsSection";
import HeaderBreadcrumb from "../../components/HeaderBreadcrumb";
import InstragramSection from "../../components/InstragramSection";
import ButtonStyle from "../../components/ui/ButtonStyle";

const AboutUs = () => {
    return (
        <div>
            <HeaderBreadcrumb direction="About Us"/>
            <div className="px-10 mt-12">
                <BenefitsSection/>
                <div className="grid grid-cols-2 gap-8 mt-12 items-center">
                    <img 
                        src="../../src/assets/images/model-about.jpg" 
                        alt="bg-model" 
                        className="rounded-xl"
                    />
                    <aside>
                        <h2 className="text-4xl font-primary mb-4">Our Vision</h2>
                        <p className="mb-6 font-secondary">Ser la joyería de referencia a nivel global, reconocida por nuestra capacidad para fusionar artesanía tradicional con diseños innovadores. Nos dedicamos a ofrecer joyas que no solo embellecen, sino que también cuentan historias y celebran momentos especiales en la vida de nuestros clientes. Aspiramos a crear una experiencia única y personalizada, destacándonos por nuestra calidad excepcional, sostenibilidad y compromiso con la excelencia en el servicio. Nuestra meta es enriquecer la vida de las personas a través de joyas que reflejen su individualidad y estilo, mientras promovemos prácticas éticas y responsables en cada aspecto de nuestra operación.</p>
                        <ButtonStyle/>
                    </aside>
                </div>
                <div className="mt-16">
                    <ClientsSection/>
                </div>
                <section className="mt-16 text-center">
                    <span className="text-rat-gray font-secondary">Our Team</span>
                    <h2 className="mt-3 font-primary text-4xl">Where Expertise</h2>
                    <div className="grid grid-cols-4 gap-8 mt-10">
                        <div className="flex flex-col gap-4 ">
                            <img className="aspect-square object-center rounded-xl w-full object-cover" src="../../src/assets/images/model2.jpg" alt="person" />
                            <aside>
                                <h3 className="font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img className="aspect-square object-center rounded-xl w-full object-cover" src="../../src/assets/images/model2.jpg" alt="person" />
                            <aside>
                                <h3 className="font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img className="aspect-square object-center rounded-xl w-full object-cover" src="../../src/assets/images/model2.jpg" alt="person" />
                            <aside>
                                <h3 className="font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <img className="aspect-square object-center rounded-xl w-full object-cover" src="../../src/assets/images/model2.jpg" alt="person" />
                            <aside>
                                <h3 className="font-primary font-bold text-xl text-dark-gray">Annette Black</h3>
                                <span className="font-medium text-rat-gray font-secondary">Design Expert</span>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
            <section className="relative mt-16 text-center bg-extra-light-gray py-12">
                <span className="capitalize text-rat-gray font-secondary">ask us anything</span>
                <h2 className="capitalize mt-3 font-primary text-4xl">frequently asked questions</h2>
                <p className="text-rat-gray font-secondary mt-4">Our friendly team would love to answer your questions</p>
                <Acordeon/>
                <img className="absolute top-40 left-5" src="../../src/assets/images/perlas.png" alt="" />
                <img className="absolute top-40 right-5 -scale-x-100" src="../../src/assets/images/perlas.png" alt="" />
            </section>
            <div className="mt-16 mx-10">
                <InstragramSection/>
            </div>
        </div>
    );
};

export default AboutUs;