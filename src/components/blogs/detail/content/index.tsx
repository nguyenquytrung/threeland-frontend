import LeftContent from "@/components/blogs/detail/content/leftContent";
import RightContent from "@/components/blogs/detail/content/rightContent";
import RelatedTour from "@/components/blogs/related-tour";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // when the component gets mounted
    setWidth(ref.current.offsetWidth);
    // to handle page resize
    const getwidth = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getwidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getwidth);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`flex ${
          width < 1300 ? "flex-col" : ""
        } w-full px-[100px] py-10`}
      >
        <div className={`${width < 1300 ? '' : 'w-2/3'}`}>
          <LeftContent width={width} />
        </div>
        <div className={`${width < 1300 ? '' : 'w-1/3'} px-10`}>
          <RightContent width={width} />
        </div>
      </div>
      <div className="">
        <RelatedTour width={width} />
      </div>
    </>
  );
};

export default Index;
