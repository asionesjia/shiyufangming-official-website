'use client'

import {FC, useEffect, useRef, useState} from 'react'
import Image, {StaticImageData} from "next/image";
import Image1 from '/public/index-1.jpg'
import Image2 from '/public/index-2.jpg'
import Image3 from '/public/index-3.jpg'
import Image4 from '/public/index-4.png'
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import {images} from "next/dist/build/webpack/config/blocks/images";

interface AreasProps {
    title: string,
    description: string,
    image: StaticImageData
}

const areas: AreasProps[] = [
    {'title': '踏遍整座山 只为给您做好茶', 'description': '在武夷山，茶叶的种植、采摘、制作历史悠久，茶人们更是将其发扬光大。我们踏遍整座山，搜集茶叶的最佳原料，精心制作每一片茶叶，以确保每一位品饮者都能品尝到最纯正的武夷岩茶。', 'image': Image1},
    {'title': '茶叶的种植、采摘、制作历史悠久', 'description': '在武夷山，茶叶的种植、采摘、制作历史悠久，茶人们更是将其发扬光大。我们踏遍整座山，搜集茶叶的最佳原料，精心制作每一片茶叶，以确保每一位品饮者都能品尝到最纯正的武夷岩茶。', 'image': Image2},
    {'title': '茶叶的种植、采摘、制作历史悠久', 'description': '在武夷山，茶叶的种植、采摘、制作历史悠久，茶人们更是将其发扬光大。我们踏遍整座山，搜集茶叶的最佳原料，精心制作每一片茶叶，以确保每一位品饮者都能品尝到最纯正的武夷岩茶。', 'image': Image3},
    {'title': '茶叶的种植、采摘、制作历史悠久', 'description': '在武夷山，茶叶的种植、采摘、制作历史悠久，茶人们更是将其发扬光大。我们踏遍整座山，搜集茶叶的最佳原料，精心制作每一片茶叶，以确保每一位品饮者都能品尝到最纯正的武夷岩茶。', 'image': Image4},
]


interface IndexCarouselProps {

}

const IndexCarousel: FC<IndexCarouselProps> = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [scrollWidth, setScrollWidth] = useState<number>(0)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const [autoSlide, setAutoSlide] = useState<boolean>(true)

    const slideRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const handleResize = () => {
            if (slideRef.current) {
                setContainerWidth(slideRef.current.offsetWidth)
                setScrollWidth(slideRef.current.scrollWidth)
                setScrollLeft(slideRef.current.scrollLeft)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setActiveIndex(activeIndex + 1)
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [activeIndex, autoSlide])

    useEffect(() => {
        if(slideRef.current && activeIndex) {
            let scrollLeftValue:number = slideRef.current.scrollLeft
            if(scrollLeftValue === containerWidth * ( areas.length - 1 )) {
                slideRef.current.scrollTo({left: 0, behavior: 'smooth'})
            }
            if(scrollLeftValue%containerWidth === 0 && scrollLeftValue !== containerWidth * ( areas.length - 1 )) {
                slideRef.current.scrollTo({left: scrollLeftValue + containerWidth, behavior: 'smooth'})
            }
            if(scrollLeftValue%containerWidth !== 0) {
                let remainder:number = scrollLeftValue%containerWidth
                slideRef.current.scrollTo({left: scrollLeftValue - remainder + 2 * containerWidth, behavior: 'smooth'})
            }
        }
    }, [activeIndex, containerWidth])

    return <div ref={slideRef} className={`h-full flex overflow-auto snap-x snap-mandatory`}>
        {areas.map((area, index) => {
            return <div key={index} className={'relative w-full h-full flex-shrink-0'}>
                <Image className={'snap-center static top-0 left-0 right-0 bottom-0 w-full h-full object-cover'}
                       src={area.image}
                       alt={''}/>
                <div className={'absolute top-1/2'}>
                    <div className={'bg-white flex justify-end p-4 pr-16 pl-32 border-4 border-l-0 border-dark-green'}>
                        <LargeHeading
                            size='lg'
                            className='text-dark-green'>
                            传承千年茶文化 <br /> 从一而终
                        </LargeHeading>
                    </div>
                    <Paragraph className='relative lg:text-left text-white p-4 pt-8 w-full'>
                        茶文化的传承需要我们不断地学习和探索，将茶的精髓发扬光大，将茶文化传承下去。让我们一起感受茶文化的魅力，传承和弘扬中华茶文化的博大精深。
                    </Paragraph>
                </div>
            </div>
        })}
    </div>
}

export default IndexCarousel
