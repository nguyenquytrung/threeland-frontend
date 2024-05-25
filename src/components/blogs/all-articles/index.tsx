import { ArrayBlogs } from "../const";

import BlogItem from "@/components/blogs/blog-item";

const Index = () => {
  return (
    <div>
      <p className="text-[48px] font-bold">All articles</p>
      {ArrayBlogs.map(
        (item, index) =>
          index < 5 && (
            <div key={item.id} className="py-10 flex">
              <BlogItem item={item} classNameAvt="w-[557px] h-[300px] object-cover" />
            </div>
          )
      )}
    </div>
  );
};

export default Index;
