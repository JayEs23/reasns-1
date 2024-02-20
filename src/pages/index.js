import React from 'react';
import Header from '@src/components/landing/Header';
import ContentHead from '@src/components/general/ContentHead';
import {Button, LoginButton} from '@src/components/general/Button';

export default function Landing() {
  return (
    <>
      <div className='head-container'>
        <Header />
        <div className='login-btn-container'>
          <LoginButton text={'Login'} className='rounded-pill' />
        </div>
      </div>
      <section className="py-5">
          <div className="container">
              <div className="row bg-pattern rounded-3 p-7 g-0">
                  <div className="col-xl-8 col-lg-10 whole-content offset-lg-1 col-md-12 col-12">
                      <div className="position-relative content z-1 my-lg-5">
                          <div className="mb-5 content-text text-center">
                            <ContentHead text={'Welcome to Relationships by '} otherText={'reasns'}/>
                            <p className="mb-4 mt-4 sub-text text-white-stable">Embrace the joy of finding true friendship here! No more endless chats or wasted time - just geniune connection and laughter ahead.</p>
                          </div>
                          <div className="btns-sect">
                              <Button text={'View Profiles'} className='fw-bold fs-4 rounded-pill' />
                              <Button text={'SIGN UP'} className='grey fw-bold fs-4 rounded-pill'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}
