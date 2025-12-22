import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className='page'>
        <div>
          <h2 className='title'>CONTACT</h2>
        </div>
        <div className='contactDetails'>
          <p>Rocio Arenillas</p>
          <p>Madrid</p>
          <p>pokemon@gmail.com</p>
        </div>
        <div>
          <button>
            <Link className='button-link' href={{
              pathname: '/'
            }}>Back to Homepage</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>

  )
}
