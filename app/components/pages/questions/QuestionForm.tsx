import React from 'react';
import TextArea from '../../layout/TextArea';
import SubmitButton from '../../layout/SubmitButton';
import FiveWs from './FiveWs';

const QuestionForm = () => {
  return (
    <div>
      <form>
        <FiveWs />
        <div>
          <TextArea id="content" name="content">
            内容
          </TextArea>
        </div>
        <SubmitButton>回答する</SubmitButton>
      </form>
    </div>
  );
};

export default QuestionForm;
