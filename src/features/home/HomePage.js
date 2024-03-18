
import Sidebar from './Sidebar'
import Content from './Content'

const HomePage = () => {

  const mainContent = {
    title: 'This is content',
    detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut ducimus excepturi tempore est maiores dignissimos, molestias nulla? Odio vitae fugit accusantium repellat a voluptates ad eveniet illum aliquam voluptatem!'
  };

  const sideBar = [
    'About',
    'Contact'
  ];

  return (
    <div className=' grid grid-cols-4 divide-x-4 divide-red-500'>
      <Sidebar side={sideBar} />
      <Content main={mainContent} />
    </div>

  )
}

export default HomePage