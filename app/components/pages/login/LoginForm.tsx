import React from 'react';
import { InputForm } from '../../layout/InputForm';
import SubmitButton from '../../layout/SubmitButton';

const LoginForm = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-5">ログイン</h1>
      <InputForm id="email" name="email" type="text">
        メールアドレス
      </InputForm>
      <InputForm id="password" name="password" type="text">
        パスワード
      </InputForm>
      <InputForm id="password_confirm" name="password_confirm" type="text">
        パスワード確認
      </InputForm>
      <SubmitButton>ログイン</SubmitButton>
    </div>
  );
};

export default LoginForm;
