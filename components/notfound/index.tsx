import { Button } from '@shared-components';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="bg-blue">
      <div className="container bg-blue w-screen h-screen overflow-hidden">
        <div className="fixed sm:right-32 lg:right-96 top-40 md:top-56">
          <h3 className="text-7xl font-light text-white leading-loose pr-1 mb-2">
            Hey! You seem to be lost :(
          </h3>
          <h1 className="font-bold text-2xl md:text-1xl text-white leading-none">
            404. <br /> Not Found.
          </h1>
          <div className="mt-6">
            <Button type="solid" text="Back to Home" onClickHandler={() => router.push('/')} />
          </div>
        </div>
      </div>
    </div>
  );
}
