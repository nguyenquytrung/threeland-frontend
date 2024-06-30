'use client';
import ArrowRight from '@/components/svg/arrow_right';
import Image from 'next/image';

import phoHaNoi from '@/assets/images/destination/pho-ha-noi-xua-4.jpg';
import cotCoHaNoi from '@/assets/images/destination/Hanoi-Flag-Tower.jpg';
import { useState } from 'react';
import Question from '../../got-question/questions/question';
import { QuestionType } from '../../got-question/questions';

const Index = () => {
  const [tab, setTab] = useState<number>(1);

  const [info, setInfo] = useState<QuestionType[]>([
    {
      id: 0,
      open: false,
      index: '01',
      question: 'When is the perfect time to visit Hanoi?',
      answer:
        'Hanoi is an all-year round destination, features the typical climate of northern Vietnam at four distinct seasons, thus you may experience the hot and humid weather in Summer from May to August, the cool feelings in Autumn from September to November, the dry and foggy weather in Winter from December to March. Though it is recommended to visit Hanoi during March-April or October-November periods, considered as the high seasons. Though your trip to Hanoi will be more affordable in Summer in term of expense. In case you wish to make a winter trip in Hanoi, remember to bring extra warm clothes.',
    },
    {
      id: 1,
      open: false,
      index: '02',
      question: 'Transportation to Hanoi',
      answer: '',
      arrayAnswer: [
        {
          name: 'Airplane',
          content:
            'Hanoi is home to the biggest airport in the Northern Vietnam – Noi Bai International Airport. There are numerous daily flights to and from Hanoi at both international and domestic gateways.',
        },
        {
          name: 'Train',
          content:
            'In the central of Hanoi, there are several train stations, yet the largest and central one is "Ga Ha Noi" on Le Duan Street. You can travel down from Hanoi to the further Northern parts or up from the Middle and Southern areas with the Reunification Express.',
        },
        {
          name: 'Bus',
          content:
            'There are a number of inter-city bus stations located in different routes within Hanoi, the main stations are Gia Lam station, My Dinh station and Giap Bat station. These transportation hubs accommodate various buses to other surrounding cities and provinces with two-way routes.',
        },
      ],
    },
    {
      id: 2,
      open: false,
      index: '03',
      question: 'Must-see sites in Hanoi',
      answer: '',
      arrayAnswer: [
        {
          name: 'Hoan Kiem Lake',
          content:
            'Hanoi is home to the biggest airport in the Northern Vietnam – Noi Bai International Airport. There are numerous daily flights to and from Hanoi at both international and domestic gateways.',
        },
        {
          name: 'Dong Xuan Market',
          content:
            'In the central of Hanoi, there are several train stations, yet the largest and central one is "Ga Ha Noi" on Le Duan Street. You can travel down from Hanoi to the further Northern parts or up from the Middle and Southern areas with the Reunification Express.',
        },
        {
          name: 'St. Joseph Church',
          content:
            'There are a number of inter-city bus stations located in different routes within Hanoi, the main stations are Gia Lam station, My Dinh station and Giap Bat station. These transportation hubs accommodate various buses to other surrounding cities and provinces with two-way routes.',
        },
        {
          name: 'Water Puppet Theater',
          content:
            'This form of puppetry probably goes back to the 11th century. With wooden dolls that are up to a meter in size as performance tools, scenes from Vietnamese life and history are delicately and sophisticatedly illustrated in a pool of water by maximal 8 artisans who hide behind the bamboo curtain. Themes normally regards to peasants, fishermen and kings, the mythical creatures Phoenix, Quilin, Long and the sacred turtle are mostly preferred.',
        },
      ],
    },
    {
      id: 3,
      index: '04',
      open: false,
      question: 'What to see in Hanoi’s surrounding areas?',
      answer: '',
      arrayAnswer: [
        {
          name: 'Halong Bay',
          content:
            'it takes about 2.5 hours to reach Halong Bay from Hanoi, one of the world 7 new wonders and a famous UNESCO site.Let spend 2 or 3 days on a cruise with fullboard service and activities, admire the sunset while slowly passing by mystifying karst rock formations.You also have chance to approach the local fishermen and their floating houses.',
        },
        {
          name: 'Tam Coc – Bich Dong complex in Ninh Binh',
          content:
            'is named as the “Halong bay on land” thanks to its splendid landscape with karst mountains and romantic water bodies. Tourists can take a boat trip along the river, cycle or climb up the mountains to fully discover and experience the magical nature here.',
        },
      ],
    },
    {
      id: 4,
      index: '05',
      open: false,
      question: 'Popular tours in Hanoi',
      answer: '',
      arrayAnswer: [
        {
          name: 'OUR PICK',
          content:
            'Two full days in Hanoi, stay at the Old Quarter, then depart for two or three-day trip in Halong Bay on a cruise; spend one or two-day tour to Ninh Binh for sightseeing, biking, hiking or river boat trips.',
        },
        {
          name: 'Cultural tours',
          content:
            'Tours to the most astonishing museums, temples and lakes of Vietnam.',
        },
        {
          name: 'Sightseeing tour',
          content: 'Vespa or food tour, walking tour in the old quarter.',
        },
        {
          name: 'Cycling tours',
          content:
            'Tours with cyclos through the best streets and around the lakes of Hanoi.',
        },
        {
          name: 'Shopping tours in Hanoi',
          content:
            'Tours to various local markets as well as the modern shopping malls in Hanoi.',
        },
        {
          name: 'Theme tours',
          content:
            'MICE, Incentive tours, educational tours, charity tours and meditation tours',
        },
        {
          name: 'Golf tour in Hanoi',
          content: 'Tours to golf courses within 2-hour driving from Hanoi.',
        },
      ],
    },
  ]);

  const [questions, setQuestion] = useState<QuestionType[]>([
    {
      id: 0,
      open: false,
      index: '01',
      question: 'Phở',
      answer:
        'Do not forget to treat yourselve by trying Phở, one of the best dishes in Hanoi which has gained reputation worldwide. For many years, Pho has grown beyond a symbol of cuisine in this place but also of the whole nation. It is a traditional Vietnamese delicacy that found its way into the minds and hearts of many Vietnamese generations.The main ingredients are white rice noodle, boiled and scented broth, flavored with the sweet essence of cow bone. A hot bowl of pho in the morning is just irresistable. When being served, it is appropriate to include pho with some fresh herbs, pepper, vinegar and extra lemon juice to enrich its taste.',
    },
    {
      id: 1,
      open: false,
      index: '02',
      question: 'Bún chả',
      answer:
        'Bun cha can be found at almost every corner of Hanoi and still remains appealing to visitors thanks to its special taste. Pork meat is grilled on top of the charcoal, served with rice vermicelli and fish sauce mixed with thin slices of fresh carrots and kohlrabies to reach enough sweet and sour flavors.',
    },
    {
      id: 2,
      open: false,
      index: '03',
      question: 'Bún thang',
      answer:
        'To prepare a bowl of bun thang, 20 different ingredients used and presented in a sophisticated way. The dish itself is more than a receipt but a colorful artwork with a background of white rice vermicelli, yellow chicken and thinly scrambled egg yolks, green onions and vegetables together with black mushrooms. In the freezing winter days, nothing can be better than enjoying a hot bowl of bun thang.',
    },
    {
      id: 3,
      index: '04',
      open: false,
      question: 'Chả cá',
      answer:
        'Cha ca has long been a specialty of Hanoi with a popular name "Cha ca La Vong". The selected fish is still fresh,must remains firm and tough, dip-fried in a shallow pan. When being served, the fish slices must be in a good shape and has a perfect golden color. The dish is perfect when the fish slides are slightly crispy outside while being soft and delicate inside. Green onions and dills are added to enhance both flavor and appearance.',
    },
    {
      id: 4,
      index: '05',
      open: false,
      question: 'Cốm',
      answer:
        'Com belongs possibly to the most elegant dishes of Hanoi and in the Northern region of Vietnam. You may see nothing than green rice grains inside darker green lotus leaves. Though, the whole process to make raw rice is remarkably sophisticated before getting the perfect green color and fragrance, thus enjoying such a dish is also required in a grace and sophisticated way. Com must be chewed slowly to feel the lotus leaf fragrance wrapped around. Since a long time, Com has been a precious gift that the Hanoians give to their relatives and beloved friends.',
    },
  ]);

  const onSetTab = (value: number) => {
    setTab(value);
  };

  const cssChoose = (tabChoose: number) => {
    return tab === tabChoose ? 'bg-[#0066b3] text-[#fff]' : '';
  };

  const handleOpenQuestion = (id: number) => {
    const _questions = [...questions].map((item) =>
      item.id === id ? { ...item, open: !item.open } : { ...item, open: false },
    );
    setQuestion(_questions);
  };

  const handleOpenInfo = (id: number) => {
    const _info = [...info].map((item) =>
      item.id === id ? { ...item, open: !item.open } : { ...item, open: false },
    );
    setInfo(_info);
  };

  return (
    <div className='w-full'>
      <div className='flex gap-2 md:gap-5 flex-wrap items-center text-[14px] py-5 bg-[#f9f9f9] px-[24px]'>
        <p className=''>Threeland</p>
        <ArrowRight />
        <p className=''>Destination </p>
        <ArrowRight />
        <p className=''>Vietnam</p>
        <ArrowRight />
        <p className=''>HANOI | HANOI TOURS</p>
      </div>
      <h3 className='text-[clamp(20px,3vw,36px)] text-center font-bold justify-content w-full py-5'>
        HANOI | HANOI TOURS
      </h3>

      <div className='shadow-lg block min-[1200px]:flex gap-8 bg-white relative z-10 py-[3rem]'>
        <Image
          src={cotCoHaNoi}
          alt='who-we-are'
          className='flex-1 w-[100%] max-w-[1256px] h-[600px] object-cover'
        />
        <div className='flex-1 block max-[1199px]:px-[24px] min-[1200px]:pr-[50px] min-[1600px]:pr-[100px]'>
          <div className='font-semibold flex text-[20px] font-bold border-b-[1px] border-[#000]'>
            <p
              onClick={() => onSetTab(1)}
              className={`${cssChoose(
                1,
              )} cursor-pointer py-5 min-[900px]:pl-20 pl-0 px-5`}
            >
              Overview
            </p>
            <p
              onClick={() => onSetTab(2)}
              className={`${cssChoose(2)} cursor-pointer py-5 px-5`}
            >
              Food & Drink
            </p>
            <p
              onClick={() => onSetTab(3)}
              className={`${cssChoose(3)} cursor-pointer py-5 px-5`}
            >
              Travel Guide
            </p>
          </div>
          {tab === 1 && (
            <>
              <p className='flex text-[18px] text-[#394445] leading-[40px] mt-6 text-justify'>
                Known as a progressive city, Hanoi is a ‘’hub’’ for multiple
                diversified day tours and perhaps has innumerable activities
                than any cities of Indochina. From basic to world-class ranked
                hotels, high-end restaurants with diverse cuisines and the best
                multi-lingual tour guiding team, Hanoi becomes a top worthwhile
                destination in Southeast Asia. Despite the rapid growth of
                modernization, the ancient charm of a thousand-year town is
                still well-maintained and harmonized with latter-day buildings
                and sparkling arcades. Most of visitors will prefer booking
                Vietnam tours with overnight stay in the complicated Old Quarter
                in order to walk along its exciting guilds-streets, for shoping
                handicraft products, to taste its incredibly delicious
                traditional foods and to stroll around long poetic roads or
                lakes.
              </p>
              <p className='flex text-[18px] text-[#394445] leading-[40px] mt-6 text-justify'>
                Thanks to ideally convenient location, the city is enfolded by
                mountains and river flows, Hanoi is not only a town to savor but
                the best departure for any tour to Vietnam for further
                discoveries by international and internal connections. In
                conjunction with Indochina countries, the city is also remarked
                for offering low-cost airfare to Laos and Myanmar, even during
                the high season. More LCCs are considering Hanoi Airport as an
                ideal inter-connection, which makes the tourism in the upcoming
                years soar undoubtedly. Your best tours in Vietnam can include
                Hanoi city tour to discover fully this capital of Vietnam at
                affordable budget price with your best travel agency in Vietnam.
              </p>
            </>
          )}
          {tab === 2 && (
            <>
              <p className='flex text-[18px] text-[#394445] leading-[40px] mt-6 text-justify'>
                Hanoi, the thousand year-old city is a convergence point of
                diverse Vietnamese cultures and various types of cuisine which
                undountedly are one of the most attractive highlights besides
                historical places. Influenced by intercourse cuisine from
                different regions, popular Hanoi city tour with plentiful
                choices from the local cuisine to Asian, Middle East or Western
                cuisine at numerous specific restaurants will sastify every
                taste. Though, among the redundant availability, Hanoi food tour
                is still a favorite choice by majority of visitors who are eager
                to explore Hanoi gastronomy. Some of those folk dishes can be
                listed below.
              </p>
              <div className='flex-1 flex flex-col gap-1 overflow-y-scroll h-[450px]'>
                {questions.map((item) => (
                  <Question
                    isDestination={true}
                    key={item.id}
                    item={item}
                    onClick={handleOpenQuestion}
                  />
                ))}
              </div>
            </>
          )}
          {tab === 3 && (
            <>
              <p className='flex text-[18px] text-[#394445] leading-[40px] mt-6 text-justify'>
                Having rich culture heritages, typical French colonial
                architectures, quintessential Vietnamese dining
                experience,turbulent historical sites for years in the different
                periods with an estimated residents of 8.1 million as of 2019,
                Hanoi is the second largest and a must-visit city in Vietnam
                tours. It is a hub of numerous interesting attractions and
                activities due to convenient connections with surrounding areas
                by any kind of transportation. Joining a Hanoi city tour allows
                you to experience luscious food tour, unique art, culture
                performances and some of Southeast Asia&apos;s most fascinating
                sights. The city is known as the most affordable international
                destination in any tours to Vietnam by TripAdvisor&apos;s annual
                TripIndex report. Check a few tips and advice below!
              </p>
              <div className='flex-1 flex flex-col gap-1 overflow-y-scroll h-[450px]'>
                {info.map((item) => (
                  <Question
                    isDestination={true}
                    key={item.id}
                    item={item}
                    onClick={handleOpenInfo}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
