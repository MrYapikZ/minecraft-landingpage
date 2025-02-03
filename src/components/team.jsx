import React from 'react';

const Team = () => {
    return (
        // !-- component --
        <div className="py-20">
            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our Team</h2>
                    {/*<p className="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning*/}
                    {/*    technology, but also on the talent of its people of some of the brightest minds and most*/}
                    {/*    experienced executives in business.</p>*/}
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                        src="/images/nakzuwu.png" alt="Nakzuwu"
                        loading="lazy" width="640" height="805" />
                        <div>
                            <h4 className="text-2xl">Nakzuwu</h4>
                            <span className="block text-sm text-gray-500">CO-Founder & Admin</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                             src="/images/yapi.png" alt="MrYapikZ" loading="lazy"
                             width="1000" height="667" />
                        <div>
                            <h4 className="text-2xl">MrYapikZ</h4>
                            <span className="block text-sm text-gray-500">Founder & Investor</span>
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                        src="/images/yue.png" alt="Yue"
                        loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 className="text-2xl">Yue</h4>
                            <span className="block text-sm text-gray-500">Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
