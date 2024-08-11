const RefundPolicy = () => {
    return (
        <div className="font-secondary text-center my-12 max-w-[1000px] mx-auto">
            <h2 className="font-primary text-3xl">Refund Policy</h2>
            <div className="mt-6 flex flex-col gap-8">
                <aside className="text-start flex flex-col gap-2">
                    <h3 className="text-2xl">Change a product by size or model - LIMA</h3>
                    <ul className="list-inside list-disc flex flex-col gap-4 mt-2">
                        <li className="">Exchanges will only be processed for products contained in orders placed within 7 days from the date of delivery of the order.</li>
                        <li className="">The exchange will be made as long as the product is in perfect condition, with its original packaging and tags and no signs of use.</li>
                        <li className="">In case the new product has a higher price, the customer must add the difference.</li>
                        <li className="">Products purchased at SALE (50%, 70%) are not subject to exchange or refund.</li>
                        <li className="">To make a change: Send a message to our whatsapp +51 960399244 with the following information: Full names, ID, order number, photo of the ticket and the order code you want to change. After confirming all the data, you will be sent the confirmation and you can approach a store to make the change.</li>
                    </ul>
                </aside>
                <aside className="text-start flex flex-col gap-2">
                    <h3 className="text-2xl">Change a product by size or model - PROVINCIA</h3>
                    <ul className="list-inside list-disc flex flex-col gap-4 mt-2">
                        <li className="">For returns from the province, the customer must assume s/15 of the cost of shipping the garment(s) to our offices in Lima. Once the garments are in our warehouses, we will proceed to the corresponding exchange and shipment.</li>                        
                    </ul>
                </aside>
                <aside className="text-start flex flex-col gap-2">
                    <h3 className="text-2xl">In case you do not find another product of your liking to manage the exchange</h3>
                    <ul className="list-inside list-disc flex flex-col gap-4 mt-2">
                        <li className="">A credit note will be issued for the value, there is no refund for the difference. The credit note is valid for one year from the date it is issued. For any questions or specific size request, please call (51) 7196666 extension 121, indicating the # of your order, full name and receipt of your purchase.</li>                        
                    </ul>
                </aside>
                <aside className="text-start flex flex-col gap-2">
                    <h3 className="text-2xl">You may request a refund if and only if:</h3>
                    <ul className="list-inside list-disc flex flex-col gap-4 mt-2">
                        <li className="">The product arrived with manufacturing flaws</li>                        
                        <li className="">The requested product was not delivered within 3 weeks.</li>                        
                        <li className="">Products purchased in PROMOTION are not subject to refunds.</li>                        
                    </ul>
                </aside>
                <aside className="text-start flex flex-col gap-2">
                    <h3 className="text-2xl">Documents you must present:</h3>
                    <ul className="list-inside list-disc flex flex-col gap-4 mt-2">
                        <li className="">Purchase ticket, invoice or gift voucher.</li>                        
                        <li className="">ID card or foreigner's card or passport.</li>                                                
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default RefundPolicy;