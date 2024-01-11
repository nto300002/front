import SubmitButton from '@/app/components/layout/SubmitButton';
import EmotionForm from './EmotionForm';

const EmotionFormNew = () => {
  return (
    <div className="text-left">
      <h1 className="text-3xl mb-5">感情を吐き出す</h1>
      <EmotionForm />
      <br />
      <SubmitButton>投稿する</SubmitButton>
    </div>
  );
};

export default EmotionFormNew;
