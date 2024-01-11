import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/' className="w-36">
          <Image 
            src="/assets/images/logo.svg"  
            width={130} 
            height={38}
            alt="Evently logo" 
          />
        </Link>
        <p className='text-sm text-gray-500'>© 2023 Evently. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer