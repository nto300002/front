'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Emotion from '../emotions/Emotion';

const Top = () => {
  return (
    <div>
      <p className="text-gray-600 text-xl mt-6">
        このアプリはあなたの感情を名付け、可視化し、深掘りすることであなたの傷を癒やすお手伝いができます。
      </p>
      <p className="text-gray-600 text-xl mt-6 mb-6">
        あなたが再び、前を向いて人生を歩けますように。
      </p>
      <div
        className="flex justify-end p-6 hover:bg-gray-50 transition duration-300 ease-in-out shadow-md"
        style={{
          backgroundImage: 'url("bg-image.jpg")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <Image src="/title_top.png" alt="title" width={400} height={300} />
        <div className="ml-auto mt-3 mr-6">
          <Link href="/login">
            <p className="text-2xl text-gray-400 hover:text-blue-300">Login</p>
          </Link>
          <Link href="/signup">
            <p className="text-2xl text-gray-400 hover:text-blue-300">Signup</p>
          </Link>
        </div>
      </div>
      <p className="mt-36" />
      <Emotion />
    </div>
  );
};

export default Top;
