export default function Loader() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue transition-all">
        <hr className="transition-all animate-changewidth duration-1000 absolute left-0 top-1/2" />
        {/* <img
          className="animate-bounce transition-all"
          src="/images/logo-light.svg"
          alt="Loading Logo"
        /> */}
        <img
          src="images/vectors/circle-spin.svg"
          alt="Circle Vector"
          className="m-auto w-100 lg:w-1/5 pointer-events-none text-right animate-spin"
        />
        {/* <hr className="transition-all animate-changewidth duration-1000 absolute right-0 top-1/2" /> */}
      </div>
    </>
  );
}
