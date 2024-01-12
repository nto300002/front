import Image from 'next/image';
import Link from 'next/link';
import UserItem from './UserItem';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full bg-red-200 p-6 flex justify-end"
        style={{
          backgroundImage: 'url("bg-image.jpg")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <HeaderNav />
        <div className="hover:cursor-pointer">
          <Link href="/">
            <Image src="/title_top.png" alt="title" width={200} height={100} />
          </Link>
        </div>
        <div className="text-gray-500 text-xl ml-auto mt-3 mr-3 hover:cursor-pointer">
          <UserItem />
        </div>
      </div>
      <> </>
    </>
  );
};

export default Header;
