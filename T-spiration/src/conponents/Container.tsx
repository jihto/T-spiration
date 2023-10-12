import React from 'react'

interface ContainerProps{
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='
        max-w-[2520px] 
        mb-auto
        xl:px-20
        lg:px-16
        md:px-10 
        sm:px-5 
        px-0
        py-3
    '>
        {children}
    </div>
  )
}

export default Container