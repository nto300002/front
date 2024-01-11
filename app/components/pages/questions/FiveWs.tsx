'use client';
import React, { useState } from 'react';

const FiveWs = () => {
  const [isSelectOther, setIsSelectOther] = useState(false);
  return (
    <ul className="flex mb-5">
      <li className="mr-5">
        <input type="radio" id="five_ws" name="five_ws" value="0" checked />
        <label htmlFor="five_ws">なぜ</label>
      </li>
      <li className="mr-5">
        <input type="radio" id="five_ws" name="five_ws" value="1" />
        <label htmlFor="five_ws">いつ、どこ</label>
      </li>
      <li className="mr-5">
        <input type="radio" id="five_ws" name="five_ws" value="2" />
        <label htmlFor="five_ws">誰に</label>
      </li>
      <li className="mr-5">
        <input type="radio" id="five_ws" name="five_ws" value="3" />
        <label
          htmlFor="five_ws"
          onClick={() => setIsSelectOther(!isSelectOther)}
        >
          その他
        </label>
        {isSelectOther ? (
          <>
            <input
              type="text"
              className="border-b-2 border-gray-400"
              id="five_ws_other"
              name="five_ws_other"
            />
          </>
        ) : (
          <></>
        )}
      </li>
    </ul>
  );
};

export default FiveWs;
