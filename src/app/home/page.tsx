

// "use client";
// // components/HomePage.tsx

// import Link from 'next/link';
// import { useState } from 'react';

// export default function Home() {
//   const [selectedColor1, setSelectedColor1] = useState('red');
//   const [selectedColor2, setSelectedColor2] = useState('blue');
//   const [selectedColor3, setSelectedColor3] = useState('green');
//   const [selectedColor4, setSelectedColor4] = useState('yellow');
//   const [selectedColor5, setSelectedColor5] = useState('red');
//   const [selectedColor6, setSelectedColor6] = useState('blue');
//   const [selectedColor7, setSelectedColor7] = useState('green');
//   const [selectedColor8, setSelectedColor8] = useState('yellow');


//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <section className="relative w-full h-screen">
//         <Image
//           src="carousel 1.png" // Replace with your image path
//           alt="Hero Image"
//           className="object-cover w-full h-full"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 opacity-50"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
//           <Link href="/contact" passHref>
//             <button className="mt-72 px-8 py-3 bg-green-600 text-white h-16 w-56 text-lg mr-[800]">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
//         <p className="text-xl text-center mb-8">Browse our exclusive collection</p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
//           {/* Product 1 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src='/sec1.png' // Replace with product image
//               alt="Product 1"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 1</h3>
//               <p className="text-gray-600 mt-2">$19.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor1 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor1('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor1 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor1('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor1 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor1('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor1 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor1('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec2.png" // Replace with product image
//               alt="Product 2"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 2</h3>
//               <p className="text-gray-600 mt-2">$29.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor2 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor2('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor2 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor2('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor2 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor2('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor2 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor2('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec3.png" // Replace with product image
//               alt="Product 3"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 3</h3>
//               <p className="text-gray-600 mt-2">$39.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor3 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor3('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor3 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor3('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor3 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor3('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor3 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor3('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec4.png" // Replace with product image
//               alt="Product 4"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 4</h3>
//               <p className="text-gray-600 mt-2">$49.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor4 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor4('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor4 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor4('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor4 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor4('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor4 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor4('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 5 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src='/sec5.png' // Replace with product image
//               alt="Product 5"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 5</h3>
//               <p className="text-gray-600 mt-2">$59.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor5 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor5('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor5 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor5('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor5 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor5('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor5 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor5('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 6 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec6.png" // Replace with product image
//               alt="Product 6"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 6</h3>
//               <p className="text-gray-600 mt-2">$69.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor6 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor6('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor6 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor6('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor6 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor6('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor6 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor6('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 7 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec7.png" // Replace with product image
//               alt="Product 7"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 7</h3>
//               <p className="text-gray-600 mt-2">$79.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor7 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor7('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor7 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor7('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor7 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor7('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor7 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor7('yellow')}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Product 8 */}
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <Image
//               src="/sec8.png " // Replace with product image
//               alt="Product 8"
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">Product Name 8</h3>
//               <p className="text-gray-600 mt-2">$89.99</p>
//               {/* Color Selection */}
//               <div className="flex mt-4 justify-start gap-4">
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor8 === 'red' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'red' }}
//                   onClick={() => setSelectedColor8('red')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor8 === 'blue' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'blue' }}
//                   onClick={() => setSelectedColor8('blue')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor8 === 'green' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'green' }}
//                   onClick={() => setSelectedColor8('green')}
//                 />
//                 <button
//                   className={`w-8 h-8 rounded-full ${selectedColor8 === 'yellow' ? 'border-4 border-black' : ''}`}
//                   style={{ backgroundColor: 'yellow' }}
//                   onClick={() => setSelectedColor8('yellow')}
//                 />
                  
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="section-2">

// <div  
// >
// <Image src="carousel-item.png" alt=""className='mt-5' />
// <div className="section-2 bg-gray-100 py-12 px-6 md:px-16">
//   <div className="flex flex-col md:flex-row md:items-center">
//     {/* Left Side Image */}
//     <div className="md:w-1/2 flex justify-center md:justify-start">
//       <Image
//         src="hero-cover-1.png"
//         alt="Hero Cover"
//         className="max-w-full md:max-w-md w-[100%]"
//       />
//     </div>

//     {/* Right Side Text & Buttons */}
//     <div className="mt-8 md:mt-0 md:w-1/2 md:ml-12 text-center md:text-left">
//       <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//         Welcome to Our Store
//       </h1>
//       <p className="text-gray-600 mt-4 text-lg">
//         Discover the best products designed for you. High quality and unique
//         designs await you!
//       </p>
//       <div className="flex justify-center md:justify-start mt-6 gap-4">
//         <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//           Buy Now
//         </button>
//         <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition">
//           Read More
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

// </div>

//         </div>
//       </section>
  
//     </div>
 


 
//   );
// "use client";
// components/HomePage.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [selectedColor1, setSelectedColor1] = useState('red');
  const [selectedColor2, setSelectedColor2] = useState('blue');
  const [selectedColor3, setSelectedColor3] = useState('green');
  const [selectedColor4, setSelectedColor4] = useState('yellow');
  const [selectedColor5, setSelectedColor5] = useState('red');
  const [selectedColor6, setSelectedColor6] = useState('blue');
  const [selectedColor7, setSelectedColor7] = useState('green');
  const [selectedColor8, setSelectedColor8] = useState('yellow');

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="carousel 1.png" // Replace with your image path
          alt="Hero Image"
          className="object-cover w-full h-full"
          height={500}
          width={500}
        />
        {/* Overlay */}
        <div className="absolute inset-0 opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <Link href="/contact" passHref>
            <button className="mt-72 px-8 py-3 bg-green-600 text-white h-16 w-56 text-lg mr-[778]">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <p className="text-xl text-center mb-8">Browse our exclusive collection</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src='/sec1.png' // Replace with product image
              alt="Product 1"
              className="w-full h-auto object-cover"
              height={300}
              width={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 1</h3>
              <p className="text-gray-600 mt-2">$19.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor1 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor1('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor1 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor1('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor1 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor1('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor1 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor1('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/sec2.png" // Replace with product image
              alt="Product 2"
              className="w-full h-auto object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 2</h3>
              <p className="text-gray-600 mt-2">$29.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor2 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor2('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor2 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor2('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor2 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor2('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor2 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor2('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/sec3.png" // Replace with product image
              alt="Product 3"
              className="w-full h-auto object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 3</h3>
              <p className="text-gray-600 mt-2">$39.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor3 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor3('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor3 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor3('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor3 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor3('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor3 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor3('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/sec4.png" // Replace with product image
              alt="Product 4"
              className="w-full h-auto object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 4</h3>
              <p className="text-gray-600 mt-2">$49.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor4 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor4('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor4 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor4('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor4 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor4('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor4 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor4('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src='/sec5.png' // Replace with product image
              alt="Product 5"
              className="w-full h-auto object-cover"
              height={200}
              width={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 5</h3>
              <p className="text-gray-600 mt-2">$59.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor5 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor5('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor5 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor5('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor5 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor5('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor5 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor5('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/sec6.png" // Replace with product image
              alt="Product 6"
              className="w-full h-auto object-cover"
              height={300}
              width={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 6</h3>
              <p className="text-gray-600 mt-2">$69.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor6 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor6('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor6 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor6('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor6 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor6('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor6 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor6('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 7 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src='/sec7.png' // Replace with product image
              alt="Product 7"
              className="w-full h-auto object-cover"
              height={300}
              width={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 7</h3>
              <p className="text-gray-600 mt-2">$79.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor7 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor7('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor7 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor7('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor7 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor7('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor7 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor7('yellow')}
                />
              </div>
            </div>
          </div>

          {/* Product 8 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src='/sec8.png' // Replace with product image
              alt="Product 8"
              className="w-full h-auto object-cover"
              height={300}
              width={300}/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product Name 8</h3>
              <p className="text-gray-600 mt-2">$89.99</p>
              {/* Color Selection */}
              <div className="flex mt-4 justify-start gap-4">
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor8 === 'red' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'red' }}
                  onClick={() => setSelectedColor8('red')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor8 === 'blue' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => setSelectedColor8('blue')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor8 === 'green' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'green' }}
                  onClick={() => setSelectedColor8('green')}
                />
                <button
                  className={`w-8 h-8 rounded-full ${selectedColor8 === 'yellow' ? 'border-4 border-black' : ''}`}
                  style={{ backgroundColor: 'yellow' }}
                  onClick={() => setSelectedColor8('yellow')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
