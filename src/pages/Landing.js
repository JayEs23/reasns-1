import React from 'react';
import Logo from '@src/components/landing/logo';
import QuestionHead from '@src/components/general/QuestionHead';
import Button from '@src/components/general/Button';

export default function Landing() {
  return (
    <div className='head-container'>
      <Logo />
      <div>
        <Button text={'Login'} bgColor={'transparent'}/>
      </div>
    </div>
  )
}
