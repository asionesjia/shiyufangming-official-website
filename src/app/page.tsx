import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Image1 from '/public/index-1.jpg'
import Image2 from '/public/index-2.jpg'
import Image3 from '/public/index-3.jpg'
import Image4 from '/public/index-4.png'

import type { Metadata } from 'next'
import IndexCarousel from "@/ui/IndexCarousel";

export const metadata: Metadata = {
  title: '世誉芳茗 ｜ 世界的中国茶',
  description: '世誉芳茗，分享给世界的中国茶。在中国，茶文化源远流长，被誉为“国之瑰宝”。而武夷岩茶作为中国茶文化中的一枝独秀，因其独特的风味和健康益处而受到全世界茶爱好者的追捧。',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='w-full h-screen mx-auto overflow-auto'>

        {/* Header区域 */}

        {/* 滚动区域 */}
        <IndexCarousel/>

        {/*<div className={'w-full h-screen overflow-auto snap-mandatory snap-y'}>*/}

        {/*  /!* 区块一 *!/*/}

        {/*  <div className='snap-center relative h-screen gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>*/}
        {/*    <Image className={'absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover'}*/}
        {/*           src={Image1}*/}
        {/*           alt={''}/>*/}
        {/*    <div className={'relative top-32'}>*/}
        {/*      <div className={'relative bg-white flex justify-end p-4 pr-16 pl-32 border-4 border-l-0 border-dark-green'}>*/}
        {/*        <LargeHeading*/}
        {/*            size='lg'*/}
        {/*            className='three-d text-dark-green'>*/}
        {/*          踏遍整座山 <br /> 只为给您做好茶*/}
        {/*        </LargeHeading>*/}
        {/*      </div>*/}
        {/*      <Paragraph className='relative lg:text-left text-white p-4 pt-8 w-full'>*/}
        {/*        在武夷山，茶叶的种植、采摘、制作历史悠久，茶人们更是将其发扬光大。我们踏遍整座山，搜集茶叶的最佳原料，精心制作每一片茶叶，以确保每一位品饮者都能品尝到最纯正的武夷岩茶。{' '}*/}
        {/*      </Paragraph>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  /!* 区块二 *!/*/}

        {/*  <div className='snap-center relative h-screen gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>*/}
        {/*    <Image className={'absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover'}*/}
        {/*           src={Image2}*/}
        {/*           alt={''}/>*/}
        {/*    <div className={'relative top-32'}>*/}
        {/*      <div className={'relative bg-white flex justify-end p-4 pr-16 pl-32 border-4 border-l-0 border-dark-green'}>*/}
        {/*        <LargeHeading*/}
        {/*            size='lg'*/}
        {/*            className='three-d text-dark-green'>*/}
        {/*          绿色的，健康的 <br /> 严格执行国标*/}
        {/*        </LargeHeading>*/}
        {/*      </div>*/}
        {/*      <Paragraph className='relative lg:text-left text-white p-4 pt-8 w-full'>*/}
        {/*        我们选用武夷山的原生态茶树，严格按照国家标准进行种植、采摘、制作，确保每一片茶叶都是纯天然的，没有任何添加剂。您品尝到的每一杯茶都是健康的。*/}
        {/*      </Paragraph>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  /!* 区块三 *!/*/}

          {/*<div className='snap-center relative h-screen gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>*/}
          {/*  <Image className={'absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover'}*/}
          {/*         src={Image3}*/}
          {/*         alt={''}/>*/}
          {/*  <div className={'relative top-32'}>*/}
          {/*    <div className={'relative bg-white flex justify-end p-4 pr-16 pl-32 border-4 border-l-0 border-dark-green'}>*/}
          {/*      <LargeHeading*/}
          {/*          size='lg'*/}
          {/*          className='three-d text-dark-green'>*/}
          {/*        传承千年茶文化 <br /> 从一而终*/}
          {/*      </LargeHeading>*/}
          {/*    </div>*/}
          {/*    <Paragraph className='relative lg:text-left text-white p-4 pt-8 w-full'>*/}
          {/*      茶文化的传承需要我们不断地学习和探索，将茶的精髓发扬光大，将茶文化传承下去。让我们一起感受茶文化的魅力，传承和弘扬中华茶文化的博大精深。*/}
          {/*    </Paragraph>*/}
          {/*  </div>*/}
          {/*</div>*/}

        {/*  /!* 区块四 *!/*/}

        {/*  <div className='snap-center relative h-screen gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>*/}
        {/*    <Image className={'absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover'}*/}
        {/*           src={Image4}*/}
        {/*           alt={''}/>*/}
        {/*    <div className={'relative top-32'}>*/}
        {/*      <div className={'relative bg-white flex justify-end p-4 pr-16 pl-32 border-4 border-l-0 border-dark-green'}>*/}
        {/*        <LargeHeading*/}
        {/*            size='lg'*/}
        {/*            className='three-d text-dark-green'>*/}
        {/*          用传统工艺 <br /> 做纯正武夷岩茶*/}
        {/*        </LargeHeading>*/}
        {/*      </div>*/}
        {/*      <Paragraph className='relative lg:text-left text-white p-4 pt-8 w-full'>*/}
        {/*        “踏遍整座山，只为给您做好茶”正是将我们茶人的匠心精神与武夷山的茶文化完美结合，用以表达茶人们对茶叶的执着和对品质的追求。无论您身在何处，品尝到的每一杯武夷山茶，都是来自于茶人精湛的技艺和用心的匠心之作。*/}
        {/*      </Paragraph>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*  Footer区域*/}

        <div className={'w-full px-10'}>

          {/* 产品列表 */}

          <div>

          </div>

          {/* 联系我们 */}

          <div>

          </div>

          {/* 底部 */}

          <div>

          </div>

        </div>

      </div>
    </div>
  )
}
