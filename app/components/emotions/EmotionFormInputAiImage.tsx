import EmotionFormInput from './EmotionFormInput';

interface AiInputProps {
  id: string;
  name: string;
}

const EmotionFormInputAiImage: React.FC<AiInputProps> = ({ id, name }) => {
  return (
    <div className="text-base">
      <EmotionFormInput id="image" name="image">
        AIによる画像生成
      </EmotionFormInput>
    </div>
  );
};
export default EmotionFormInputAiImage;
