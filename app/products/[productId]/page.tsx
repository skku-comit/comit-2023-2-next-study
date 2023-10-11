'use client'

export default function ProductDetail({ params }: { params: { productId: string[] } }) {
    console.log(params.productId)
    console.log(params)
  
  return (
    <div>
      <h1>Product Detail</h1>

<p>{params.productId.join(' !!!!! ')}</p>
    </div>
  );
}
