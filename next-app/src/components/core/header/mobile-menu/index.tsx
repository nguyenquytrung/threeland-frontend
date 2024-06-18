import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/core/ui/accordion';
import { extrasTooltip, tourStyleTooltip } from '@/constants';

export function MobileMenu() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full flex-1 overflow-y-auto overflow-x-hidden'
    >
      <AccordionItem value='item-0'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          <Link href='/' className='w-full text-left'>
            Home
          </Link>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='uppercase'>Destination</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          <Link
            href='/vietnam-tours'
            className='uppercase block hover:underline '
          >
            Vietname tour
          </Link>
          <Link href='/laos-tours' className='uppercase block hover:underline '>
            Laos tour
          </Link>
          <Link
            href='/cambodia-tours'
            className='uppercase block hover:underline '
          >
            Cambodia tour
          </Link>
          <Link
            href='/myanmar-tours'
            className='uppercase block hover:underline '
          >
            Myanmar tour
          </Link>
          <Link
            href='/thailand-tours'
            className='uppercase block hover:underline '
          >
            Thailand tour
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger className='uppercase'>Tour Style</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          {tourStyleTooltip.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: `/tours/${item.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`,
                query: { title: item.name },
              }}
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
              href={item.route}
              className='uppercase block hover:underline '
            >
              {item.name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          <Link href='/responsible' className='w-full text-left'>
            Responsible
          </Link>
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value='item-5'>
        <AccordionTrigger className='uppercase'>About</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4'>
          <Link
            href='/about/who-we-are'
            className='uppercase block hover:underline '
          >
            Who we are
          </Link>
          <Link
            href='/about/portfolio'
            className='uppercase block hover:underline '
          >
            Portfolio
          </Link>
          <Link
            href='/about/why-us'
            className='uppercase block hover:underline '
          >
            Why us
          </Link>
          <Link
            href='/about/our-team'
            className='uppercase block hover:underline '
          >
            Our team
          </Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-6'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          <Link href='/blogs' className='w-full text-left'>
            Blog
          </Link>
        </AccordionTrigger>
      </AccordionItem>

      <AccordionItem value='item-7'>
        <AccordionTrigger isCollapse={false} className='uppercase'>
          <Link href='/contact-us' className='w-full text-left'>
            Contact us
          </Link>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}
