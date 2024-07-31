import CardBenefits from './CardBenefits';
import { AwardIcon, ShieldIcon, StackIcon, TruckIcon } from './ui/icons';

const BenefitsSection = () => {
    return (
        <section className="flex relative py-8 justify-between rounded-md bg-extra-light-gray">
            <CardBenefits children={<AwardIcon className="style-card-cardBenefits"/>} title="Certified" description="Avaible certificates of authenticy"/>                                                            
            <div className="bg-light-gray w-[2px]"></div>
            <CardBenefits children={<ShieldIcon className="style-card-cardBenefits"/>} title="Secure" description="Certified marketplace since 2024"/>                                        
            <div className="bg-light-gray w-[2px]"></div>
            <CardBenefits children={<TruckIcon className="style-card-cardBenefits"/>} title="Shipping" description="Free, fast, and reilable worldwide"/>                                        
            <div className="bg-light-gray w-[2px]"></div>
            <CardBenefits children={<StackIcon className="style-card-cardBenefits"/>} title="Transparent" description="Hassle-free return policy"/>                                        
        </section>
    );
};

export default BenefitsSection;