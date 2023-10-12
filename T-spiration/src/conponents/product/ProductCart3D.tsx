import React from 'react'
import Button from '../buttons/Button';

interface ProductCart3DProps{
  children?: React.ReactNode;
}

const ProductCart3D:React.FC<ProductCart3DProps> = ({
  children
}) => {
  return (
    <div className='relative bg-gray-100 w-full h-auto p-4 rounded-xl'>
      <img className='bg-white rounded-xl border-2' src='https://shoprollingloud.com/cdn/shop/products/tee_black_back_5ff4a2ab-501f-4508-9bb5-cca4ca71b2c0.png?v=1657287659'/>
      <div className='absolute bottom-0 left-1/4 flex gap-4 justify-center'>
        <Button label='View 3D'/>
        <Button label="View 2D" />
      </div>

      {children}
    </div>
  )
}
export default ProductCart3D;