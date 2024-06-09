'use client';
import React, { useState } from 'react';
import Question from './question';

export type QuestionType = {
  id: number;
  open: boolean;
  index: string;
  question: string;
  answer: string;
};

const Questions = () => {
  const [questions, setQuestion] = useState<QuestionType[]>([
    {
      id: 0,
      open: true,
      index: '01',
      question: 'Alright, but what exactly do you do?',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 1,
      open: false,
      index: '02',
      question:
        "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 2,
      open: false,
      index: '03',
      question: 'Are your rates competitive?',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 3,
      index: '04',
      open: false,
      question: 'Why do you have a monthly project cap?',
      answer:
        'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
    },
    {
      id: 4,
      index: '05',
      open: false,
      question: 'Why do you have a monthly project cap?',
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
    <div className='flex-1 flex flex-col gap-1'>
      {questions.map((item) => (
        <Question key={item.id} item={item} onClick={handleOpenQuestion} />
      ))}
    </div>
  );
};

export default Questions;
