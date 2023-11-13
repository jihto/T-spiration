import React from 'react'

interface ContainerProps{
    children: React.ReactNode;
    p_page?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, p_page = true }) => {
  return (
    <div className={`
        max-w-[2520px] 
        ${p_page && 'pt-20'}
        mb-auto
        xl:px-20
        lg:px-16
        md:px-10 
        sm:px-5 
        px-0
        py-3
    `}>
        {children}
    </div>
  )
}

export default Container