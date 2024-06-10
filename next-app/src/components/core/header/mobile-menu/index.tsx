import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/core/ui/accordion';
import { extrasTooltip, tourStyleTooltip } from '@/constants';
import Link from 'next/link';

export function MobileMenu() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full flex-1 overflow-y-auto overflow-x-hidden'
    >
      <AccordionItem value='item-0'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          Home
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='uppercase'>Destination</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          <Link
            href='/destination'
            className='uppercase block hover:underline '
          >
            Vietname tour
          </Link>
          <Link
            href='/destination'
            className='uppercase block hover:underline '
          >
            Laos tour
          </Link>
          <Link
            href='/destination'
            className='uppercase block hover:underline '
          >
            Cambodia tour
          </Link>
          <Link
            href='/destination'
            className='uppercase block hover:underline '
          >
            Myanmar tour
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='uppercase'>Tour Style</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          {tourStyleTooltip.map((item) => (
            <Link
              key={item.id}
              href='/tour-style'
              className='uppercase block hover:underline '
            >
              {item.name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger className='uppercase'>Extras</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          {extrasTooltip.map((item) => (
            <Link
              key={item.id}
              href='/tour-style'
              className='uppercase block hover:underline '
            >
              {item.name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          Responsible
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value='item-5'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          About
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value='item-6'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          Blog
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value='item-7'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          Contact Us
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}
