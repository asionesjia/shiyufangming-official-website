import LogoDark from "/public/logo-dark.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className='w-full py-16 px-4 sm:px-6 md:px-16 lg:px-36 bg-green-950'>
            <div className={'flex justify-between'}>
                <div className={'flex space-x-24 text-xs text-gray-400'}>
                    <div className={'flex-col space-y-2'}>
                        <div className={'text-sm font-bold text-gray-100'}>联系我们</div>
                        <div>联系我们</div>
                        <div>联系我们</div>
                    </div>
                    <div className={'flex-col space-y-2'}>
                        <div className={'text-sm font-bold text-gray-100'}>联系我们</div>
                        <div>联系我们</div>
                        <div>联系我们</div>
                    </div>
                </div>
                <div>
                    <Image src={LogoDark} alt={'111'} height={200}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer
