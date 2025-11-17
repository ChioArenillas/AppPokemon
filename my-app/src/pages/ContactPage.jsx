import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <div>
        <h2>CONTACTO</h2>
      </div>
      <div>
        <p>Rocio Arenillas</p>
        <p>Madrid</p>
        <p>rocio.arenillas@gmail.com</p>
      </div>
      <div>
      <Link href={{
          pathname:'/'
          }}>Back to Homepage</Link>
      </div>
    </div>
  )
}
