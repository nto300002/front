import EmotionFormInput from './EmotionFormInput';

interface AIInputProps {
  id: string;
  name: string;
}

const EmotionFormInputAIImage: React.FC<AIInputProps> = ({ id, name }) => {
  return (
    <div className="text-base">
      <EmotionFormInput id="image" name="image">
        AIによる画像生成
      </EmotionFormInput>
    </div>
  );
};
export default EmotionFormInputAIImage;
