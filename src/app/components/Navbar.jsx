import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className="flex gap-5 items-center px-8 py-3 justify-between bg-slate-800 text-red-100 font-bold tracking-widest ">
                <Link href={'/'} className="text-2xl">CRUD</Link>
                <Link href={'/addTopic'} className="bg-white text-black hover:bg-gray-500  hover:text-white  rounded-2xl px-4 py-2 " >Add Topic</Link>
            </nav>
        </>
    )
}

export default Navbar