import { social } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Connect() {
  return (
    <>
      <div className="bg-blue h-auto min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
          <div className="w-full text-center lg:w-7/12 lg:text-left pl-0 lg:pl-20">
            <div className="w-full lg:w-2/3">
              <h1 className="text-white mb-6">{social.title}</h1>
              <p className="text-sm sm:text-7xl font-light text-white leading-none mb-6">
                {social.about}
              </p>
              <div className="flex flex-row justify-center lg:justify-start items-end">
                {social.socials.map(({ alt_text, image_file, link }) => (
                  <Link href={link} key={link}>
                    <Image
                      width={50}
                      height={50}
                      src={image_file}
                      alt={alt_text}
                      className="w-6 md:w-10 h-10 m-2 md:m-2 transition-all hover:opacity-40 transform hover:scale-75"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
