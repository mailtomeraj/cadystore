import Link from "next/link"

const Navbar = () => {
   return (
     <div className='max-w-7xl mx-auto p-4 flex-row justify-around hidden rounded-full md:flex bg-orange-300'>
        <Link href="/" className="text-black font-semibold">Best Sellers</Link>
        <Link href="/" className="text-black font-semibold">Chocolate</Link>
        <Link href="/" className="text-black font-semibold">Gifts</Link>
        <Link href="/" className="text-black font-semibold">Sales and Deals</Link>
        <Link href="/" className="text-black font-semibold">Experience</Link>
        <Link href="/" className="text-black font-semibold">Grocery Aistle</Link>
    </div>
   )
 }
 export default Navbar