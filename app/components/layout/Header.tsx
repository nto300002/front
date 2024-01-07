'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';

const Header = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const styleHover = 'hover:text-blue-500 mb-3';
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-red-200 p-6 flex justify-end">
        <div className="hover:cursor-pointer">
          <Link href="/">
            <Image src="/title_top.png" alt="title" width={200} height={100} />
          </Link>
        </div>
        <p
          className="text-white text-xl ml-auto mt-3 mr-3 hover:animate-bounce hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ▼
        </p>
        {isLoggedIn ? (
          <Avatar />
        ) : (
          <>
            <p
              className="text-white text-xl mt-3 ml-3 mr-3 hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </p>
          </>
        )}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute text-gray-800 p-6 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left">
          <button
            className="bg-red-500 text-white text-xs p-1 pl-2 pr-2 mb-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          {isLoggedIn ? (
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link href="/logout">
                <p className={styleHover}>ログアウト</p>
              </Link>
              <Link href="/emotions">
                <p className={styleHover}>みんなの感情</p>
              </Link>
              <Link href="/emotions/new">
                <p className={styleHover}>感情を吐き出す</p>
              </Link>
              <Link href="/profile">
                <p className={styleHover}>プロフィール</p>
              </Link>
              <p onClick={() => setLogin(!isLoggedIn)} className="pt-5">
                {isLoggedIn ? 'Login' : 'Logout'}
              </p>
            </div>
          ) : (
            // Logged-in user menu options here
            <div>
              <Link href="/login">
                <p className={styleHover}>ログイン</p>
              </Link>
              <Link href="/signup">
                <p className={styleHover}>サインアップ</p>
              </Link>
              <Link href="/emotions">
                <p className={styleHover}>みんなの感情</p>
              </Link>
              <Link href="/emotions/new">
                <p className={styleHover}>感情を吐き出す</p>
              </Link>
              <p onClick={() => setLogin(!isLoggedIn)} className="pt-5">
                {isLoggedIn ? 'Login' : 'Logout'}
              </p>
            </div>
            // Guest menu options here
          )}
        </div>
      )}
    </>
  );
};

export default Header;
