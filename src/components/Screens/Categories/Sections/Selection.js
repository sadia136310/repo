import React from 'react';
const Selection = () => {
    return (
        <div className='bg-base-300 my-7 py-6 bg-[#F7F7F7]'>
            <div className='container mx-auto flex justify-center'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 md:gap-24'>
                    <div className='flex align-items-center gap-5 '>
                        <img className='w-15 h-10' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-01.png" alt="Movie" />
                        <div>
                            <h2 className="text-lg font-bold pb-2">High Quality Selection
                            </h2>
                            <small className='sm:hidden md:hidden lg:block'>Total Product Quality <br /> Control  For Peace Of Mind </small>
                        </div>
                    </div>
                    <div className='flex align-items-center gap-5 '>
                        <img className='w-15 h-10' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-02.png" alt="Movie" />
                        <div>
                            <h2 className="text-lg font-bold pb-2">Affordable Prices
                            </h2>
                            <small className='lg:block md:hidden sm:hidden'>Factory Direct Prices For <br /> Maximum Savings </small>
                        </div>
                    </div>
                    <div className='flex align-items-center gap-5 '>
                        <img className='w-10 h-10' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-03.png" alt="Movie" />
                        <div>
                            <h2 className="text-lg font-bold pb-2">Secure Payment
                            </h2>
                            <small className='lg:block md:hidden sm:hidden'>Fast, Reliable Delivery From <br /> Global Warehouses </small>
                        </div>
                    </div>
                    <div className='flex align-items-center gap-5 '>
                        <img className='w-10 h-10' src="https://stunhaul.com/wp-content/uploads/2022/02/footer-image-box-04.png" alt="Movie" />
                        <div>
                            <h2 className="text-lg font-bold pb-2">Worry Free
                            </h2>
                            <small className='lg:block md:hidden sm:hidden'>Instant Access To <br />
                                Professional Support </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selection;