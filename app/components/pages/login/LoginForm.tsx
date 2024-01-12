import React from 'react';
import Input from '../../layout/Input';
import SubmitButton from '../../layout/SubmitButton';

const LoginForm = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-5">ログイン</h1>
      <Input id="email" name="email">
        メールアドレス
      </Input>
      <Input id="password" name="password">
        パスワード
      </Input>
      <Input id="password_confirm" name="password_confirm">
        パスワード確認
      </Input>
      <SubmitButton>ログイン</SubmitButton>
    </div>
  );
};

export default LoginForm;
