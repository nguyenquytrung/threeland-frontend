'use client';
import React, { useState } from 'react';
import Detail from './detail';

export type QuestionType = {
  id: number;
  open: boolean;
  index: string;
  question: string;
  answer: string;
};

const ExtraServiceDetails = () => {
  const [questions, setQuestion] = useState<QuestionType[]>([
    {
      id: 0,
      open: true,
      index: '01',
      question: 'VISA ASSISTANCE',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 1,
      open: false,
      index: '02',
      question: 'Transportation',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 2,
      open: false,
      index: '03',
      question: 'Flights',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 3,
      index: '04',
      open: false,
      question: 'Hotels',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
  ]);

  const handleOpenQuestion = (id: number) => {
    const _questions = [...questions].map((item) =>
      item.id === id ? { ...item, open: !item.open } : { ...item, open: false },
    );
    setQuestion(_questions);
  };

  return (
    <section className='px-[24px] sm:px-[50px] lg:px-[100px] pb-[clamp(1rem,5vw,5rem)]'>
      <div className='flex-1 flex flex-col gap-4 max-w-[1429px] mx-auto'>
        {questions.map((item) => (
          <Detail key={item.id} item={item} onClick={handleOpenQuestion} />
        ))}
      </div>
    </section>
  );
};

export default ExtraServiceDetails;
