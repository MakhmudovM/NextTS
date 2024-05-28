import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-center w-full gap-6 text-xl mt-3">
        <Link href="/">Home</Link>
        <Link href="./contact">contact</Link>
        <Link href="./product">product</Link>
        <Link href="./about">About</Link>
      </nav>
    </div>
  );
}

export default Navbar;
/*navbar ml-auto mr-auto items-center text-center w-96  gap-10*/ 