import React from 'react'
import Link from 'next/link'


const Header = async ({categories}) => {

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
            <Link href="/">
                <span className='cursor-pointer font-bold text-4xl text-#25110d'>
                    CrowMathic
                </span>
            </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
            {categories.map((category)=>(
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='md:float-right pr-4 mt-2 align-middle text-#25110d ml-4 font-semibold cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Header
