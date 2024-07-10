import React from 'react';
import {Modal} from '@/components/modals';
import {useModal} from '@/hooks';
import {CheckEmailModalContent} from '@/components/modals'

const HomePage: React.FC = () => {
  const { open: openCheckemailModel } = useModal('checkemailModel');
  const { open: openModal2 } = useModal('modal2');

  return (
    <div>
      <button onClick={openCheckemailModel}>Open Modal 1</button>
      <button onClick={openModal2}>Open Modal 2</button>

    </div>
  );
};

export default HomePage;
