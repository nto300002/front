import SubmitButton from '../layout/SubmitButton';
import EmotionForm from './EmotionForm';

const EmotionFormEdit = () => {
  return (
    <div className="text-left">
      <h1 className="text-3xl mb-5">吐き出した感情の内容を変更</h1>
      <EmotionForm />
      <br />
      <SubmitButton>変更する</SubmitButton>
    </div>
  );
};

export default EmotionFormEdit;
