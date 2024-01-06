import React from 'react';
import Input from '../layout/Input';
import SubmitButton from '../layout/SubmitButton';

const SignupForm = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-5">新規登録</h1>
      <Input id="email" name="email">
        メールアドレス
      </Input>
      <Input id="password" name="password">
        パスワード
      </Input>
      <Input id="password_confirm" name="password_confirm">
        パスワード確認
      </Input>
      <SubmitButton>登録</SubmitButton>
    </div>
  );
};

export default SignupForm;
