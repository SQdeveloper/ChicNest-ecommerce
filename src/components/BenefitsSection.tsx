import CardBenefits from './CardBenefits';
import { AwardIcon, ShieldIcon, StackIcon, TruckIcon } from './ui/icons';

const BenefitsSection = () => {
    return (
        <section className="max-[800px]:flex-col max-[800px]:gap-4 max-[800px]:bg-white flex relative py-8 justify-between rounded-md bg-extra-light-gray">
            <div className='max-sm:flex-col flex w-full max-[800px]:gap-4'>
                <CardBenefits children={<AwardIcon className="w-16 h-16 style-card-cardBenefits"/>} title="Certified" description="Avaible certificates of authenticy"/>                                                            
                <div className="max-[800px]:hidden bg-light-gray w-[2px]"></div>
                <CardBenefits children={<ShieldIcon className="w-16 h-16 style-card-cardBenefits"/>} title="Secure" description="Certified marketplace since 2024"/>                                        
            </div>
            <div className='max-sm:flex-col flex w-full max-[800px]:gap-4'>
                <div className="max-[800px]:hidden bg-light-gray w-[2px]"></div>
                <CardBenefits children={<TruckIcon className="w-16 h-16 style-card-cardBenefits"/>} title="Shipping" description="Free, fast, and reilable worldwide"/>                                        
                <div className="max-[800px]:hidden bg-light-gray w-[2px]"></div>
                <CardBenefits children={<StackIcon className="w-16 h-16 style-card-cardBenefits"/>} title="Transparent" description="Hassle-free return policy"/>                                        
            </div>
        </section>
    );
};

export default BenefitsSection;