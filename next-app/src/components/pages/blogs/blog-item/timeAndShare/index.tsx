import DotSvg from '@/components/svg/dotSvg';
import ClockSvg from '@/components/svg/clockSvg';
import ShareSvg from '@/components/svg/shareSvg';

const Index = (props: any) => {
  const { theme, item, size } = props;
  return (
    <div className='flex'>
      <div className='w-2 h-2 self-center'>
        <DotSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <div className='w-6 h-6 mx-2 self-center'>
        <ClockSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <p
        className={`text-[${
          theme === 'dark' ? '#FFF' : '#6A7373'
        }] self-center`}
      >
        {item?.created_at}
      </p>
    </div>
  );
};

export default Index;
