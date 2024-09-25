import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import Image from "next/image";
import LogoLight from "/public/logo-light.png";
import LogoDark from "/public/logo-dark.png";

const Navbar = async () => {

  return (
    <div className='fixed bg-transparent hover:bg-white/75 hover:backdrop-blur-sm z-50 top-0 left-0 right-0 h-20 hover:shadow-sm flex items-center justify-between'>
      <div className='md:px-3 mx-auto w-full flex justify-between items-center'>
        <div className={''}>
          <Link href='/'>
            <Image className={'hidden w-16'} src={LogoDark} alt={'世誉芳茗'}/>
            <Image className={'dark:hidden w-16'} src={LogoLight} alt={'世誉芳茗'}/>
          </Link>
        </div>

        <div className='flex gap-4'>
          <Link
            href='/'
            className={buttonVariants({ variant: 'ghost' })}>
            首页
          </Link>
          <Link
              href='/products'
              className={buttonVariants({ variant: 'ghost' })}>
            产品介绍
          </Link>
          <Link
              href='/about'
              className={buttonVariants({ variant: 'ghost' })}>
            关于我们
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
