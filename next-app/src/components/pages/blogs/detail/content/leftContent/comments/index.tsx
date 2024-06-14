import React from 'react';

const comments = [
  {
    id: 0,
    userName: 'Luci Avetisyan',
    comment:
      'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
  },
  {
    id: 1,
    userName: 'Luci Avetisyan',
    comment:
      'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
  },
  {
    id: 2,
    userName: 'Luci Avetisyan',
    comment:
      'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
  },
  {
    id: 3,
    userName: 'Luci Avetisyan',
    comment:
      'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
  },
  {
    id: 4,
    userName: 'Luci Avetisyan',
    comment:
      'Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra mollis metus quam adipiscing vel nascetur condimentum felis sapien. Pede consequat laoreet enim sit aliquet mollis semper.',
  },
];

const Comments = () => {
  return (
    <div>
      {comments.map((cmt, index) => (
        <React.Fragment key={cmt.id}>
          <div>
            <h4 className='text-[24px] font-semibold'>{cmt.userName}</h4>
            <p className='text-[18px] font-extralight mt-3'>{cmt.comment}</p>
          </div>
          {index !== comments.length - 1 && <hr className='my-5' />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Comments;
