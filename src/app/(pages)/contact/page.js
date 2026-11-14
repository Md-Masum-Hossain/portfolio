import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import ContactFrom from '../../components/ContactFrom';
import ContactAddress from '../../components/ContactAddress';

function Contract() {
  return (
    <>
      <div className='flex gap-2 neon-glow-purple border border-cyan-200 w-40 mx-auto mb-7 p-2 rounded-full opacity-60 text-cyan-400 text-center justify-center items-center backdrop-blur-md'><MdOutlineAttachEmail className='text-amber-50' /> Let&apos;s Connect</div>
      <h2 className=' text-5xl font-semi-bold text-center'>Get In <span className='gradient-text'>Touch</span></h2>
      <p className='text-center text-muted-foreground mt-5'>Have a project in mind or just want to chat? I&apos;d love to hear from you!</p>
      <div className='mt-10'>
        <section className='grid md:grid-cols-3 gap-4 md:mx-10'>
        <div>
          <ContactAddress />
        </div>
        <div className='md:col-span-2'>
          <ContactFrom /> 
        </div>
      </section>
      </div>
    </>
  )
}

export default Contract;
