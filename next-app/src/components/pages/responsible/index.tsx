import Image from "next/image";
import React from "react";

import WhyUs1 from "@/assets/images/why-us/why-us1.jpg";
import WhyUs2 from "@/assets/images/why-us/why-us2.jpg";
import WhyUs3 from "@/assets/images/why-us/why-us3.jpg";
import WhyUs4 from "@/assets/images/why-us/why-us4.jpg";

const Index = () => {
    return (
        <div>
            <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
                <div className="absolute 2xl:h-[50%] lg:h-[50%] h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0 top-0"></div>
                <div className="block relative py-[clamp(2rem,6vw,1rem)] text-[#fff] sm:px-[50px] lg:px-[100px]">
                    <div className="pr-[50px] pl-[24px] sm:pl-[20px] lg:pl-[200px] xl:pl-[300px] 2xl:pl-[400px]">
                        <div className="text-[56px] font-medium py-1 min-[1360px]">
                            Responsible travel
                        </div>
                        <div className="text-[20px] leading-[32px] pb-10 font-extralight text-justify">
                            hreeland has been engaged with the Travelife certification program and started
                            the process to work step by step towards complying with its international sustainability
                            standards. Travelife is a three-stage certification program for tour operators and travel agents:
                            (1) Travelife Engaged; (2) Travelife Partner and (3) Travelife Certified. We are at stage
                            1 – Travelife Engaged and working to move forward to stage 2 - Travelife Partner.
                        </div>
                        <div className="text-[20px] leading-[32px] font-extralight pb-20 text-justify">
                            With our wholehearted mission is working toward as a responsible travel company,
                            Threeland cares much on how our operation impacts to people and places that we touch.
                            We truly aware that trust and success are built by responsibility. “Being responsible”
                            is not only to the environment but also to the people collaborating with Threeland
                            including partners, staffs, and travelers. We aim to raise better places of living
                            for locals and visiting for travelers in the long-term commitment.
                        </div>
                    </div>
                </div>
                <div className="2xl:mx-[200px] lg:mx-[50px] mx-auto shadow-lg block min-[900px]:flex gap-8 bg-white relative z-10 px-[2.5rem] py-[3rem]">
                    <Image
                        src={WhyUs1}
                        alt="who-we-are"
                        className="flex-1 w-[100%] max-w-[640px] min-w-[240px] object-cover"
                    />
                    <div className="flex-1">
                        <p className="absolute text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ECF1FE] pt-[40px] pb-[40px] z-0">
                            01
                        </p>
                        <div className="relative">
                            <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pr-[100px] z-10 pt-[100px]">
                                Corporate Social Responsibility (CSR) Is The Key To Success
                            </h3>
                            <p className="flex text-[18px] text-[#394445] leading-[40px] mt-6 text-justify">
                                Some natural core and reserved zones are often added to our itineraries for adventurous and active activities, we encourage our travelers to preserve the environment,
                                socially and economically sustain the well-being of local people, eventually make each trip meaningful and impactful. To make our CSR initiative success, we count
                                on all parties involved who are still our partners, staff, travelers, and community residents. Hence, we have a sharp focus effectively on reducing the bad impact
                                on the environment such as choosing carefully transport suppliers, hotel partners, limit footprint on green grasses and offer alternate green options for like-minded
                                clients willing to reduce waste on their trip. We have initiated good impacts of cultural give-and-take on foreign visitors, given more investment in remote areas for
                                tourism and provided monthly training session for our staff on sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{ backgroundImage: `url('/banner_why_us_1.jpg')` }}
                className="min-[900px]:flex block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px] mt-[50px]"
            >
                <div className="absolute h-[100%] bg-[#171717] opacity-80 bottom-0 left-0 right-0 top-0"></div>
                <p className="absolute text-[clamp(80px,8vw,155px)] text-opacity-20 font-semibold leading-[107.24px] text-[#ECF1FE] pt-[30px] pb-[40px] z-0">
                    02
                </p>
                <div className="flex-1 mb-10 relative pr-10">
                    <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[64px] font-bold pt-[90px] z-10 text-[#fff]">
                        Children Support, Especially Difficult Living
                    </h3>
                    <p className="flex text-[20px] text-[#FFFFFF] leading-[40px] mt-6 justify-around text-[#fff] z-10 tracking-normal text-justify">
                        Threeland Travel currently coordinates with dedicated partners and actively engages our partners and travelers to make a high volume of meaningful tours towards children who are having a difficult living or who are disabling by lighting up their smiles, improving living standards and education level. We pioneer and support projects related to children and follow strictly to Child Protection policies. Every year, Threeland also organized winter outing for staff and we frequently tend to travel to a remote area to meet local hill tribal children and raise donation by giving clothes, money, books and essential appliance too.
                    </p>
                </div>
                <Image
                    src={WhyUs2}
                    alt="who-we-are"
                    className="flex-1 max-w-[853px] min-w-[320px] w-[100%] object-cover py-10 z-10"
                />
            </section>

            <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
                <div className="absolute 2xl:h-[40%] lg:h-[50%] h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0 top-0"></div>
                <div className="shadow-lg mt-[100px] block min-[900px]:flex gap-8 bg-white relative z-10 mx-auto min-[900px]:p-[60px] p-0">
                    <Image
                        src={WhyUs3}
                        alt="who-we-are"
                        className="flex-1 w-[100%] max-w-[851px] min-w-[240px] object-cover"
                    />
                    <div className="max-w-[1500px] flex-1 mb-10 relative pr-10">
                        <div className="min-[900px]:mx-0 mx-10 pt-10">
                            <p className="absolute text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ecf1fe] pt-[30px] pb-[40px] z-1">
                                03
                            </p>
                            <div className="relative">
                                <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pt-[90px] z-10">
                                    Sustainable & Community-Based Tourism
                                </h3>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Threeland pays attention on the knowledge of the geographical character for travelers and
                                    locals of places that they are visiting and living such as surrounding environment, heritage,
                                    aesthetics, culture and well-being. We also can cater CBT and provide eco-accommodation which
                                    maximize benefits for local communities on conserving fragile cultures, their habitats,
                                    biological diversity, minimizes negative environmental impacts & helps local people to have job.
                                    Our customers are able to visit a destination where ethical issues are the key driver such as
                                    social injustice, animal welfare or the environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
                <div className="2xl:mx-[200px] lg:mx-[50px] mx-auto shadow-lg block min-[900px]:flex gap-8 bg-white relative z-10 pl-[2.5rem] pr-[1rem] py-[2rem] border-[0.5px] border-[#ecf1fe] my-20">
                    <div className="flex-1">
                        <div className="min-[900px]:mx-0 mx-10 pt-10">
                            <p className="absolute text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ecf1fe] pb-[40px] z-1">
                                04
                            </p>
                            <div className="relative">
                                <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pt-[50px] z-10">
                                    Our Responsible Policies
                                </h3>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Following Travelife certification program, Threeland Travel creates a responsible policy as a commitment to define the way we work and perform. Some of the highlight points which we attach special importance toward responsibility are:
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Ecology protection: Discourage smoking, garbage, disruption of local communities’ life; Prevent the environment’s destruction.
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Build long-term community-based projects: Create jobs and support local economies by hiring locals, consuming local products and living with local style at our eco-lodge in remote area; Develop tours with positive impacts on local community grassroots.
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Minimize negative environmental impacts through alternative ways such as walking, cycling, and rickshaws; offers no activities that harm humans, animals, plants, natural resources (e.g. water/energy), or which are socially/culturally unacceptable.
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Energy and resource savings: Work with hotel partners to friendly remind customers of in-room power and resource saving encourage the adoption of eco option such as re-using towels and sheets.
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Limit unnecessary waste: minimize consumption of paper, energy, and water at offices and on tour.
                                </p>
                                <p className="flex text-[20px] leading-[40px] mt-6 text-justify">
                                    Use eco-friendly working materials at office, hotel and on tour.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={WhyUs4}
                        alt="who-we-are"
                        className="max-w-[662px] min-w-[100px] object-cover w-[100%] mt-[200px]"
                    />
                </div>
            </section>
        </div>
    );
};

export default Index;
