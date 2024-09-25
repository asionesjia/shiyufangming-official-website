'use client'

import {useParams} from "next/navigation";
import Image from "next/image";
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import {ChevronDownIcon, Minus, Plus, X} from 'lucide-react'
import Image1 from "/public/index-1.jpg";
import Image2 from "/public/index-2.jpg";
import Image3 from "/public/index-3.jpg";
import Image4 from "/public/index-4.png";

const Page = ({}) => {
    const params = useParams();
    console.log(params)
    return <div className={'pt-16 w-full px-2 sm:px-6 md:px-12 lg:px-24'}>
        <div className={'w-full flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16'}>
            <div className={'flex-1'}>
                <div className={'grid gap-4 grid-cols-2'}>
                    <Image className={''} src={Image1} alt={''}/>
                    <Image className={''} src={Image2} alt={''}/>
                    <Image className={''} src={Image3} alt={''}/>
                    <Image className={''} src={Image4} alt={''}/>
                </div>
            </div>
            <div className={'md:flex-shrink md:w-1/3 flex flex-col justify-start'}>
                <div className={''}>
                    <div className={'flex text-4xl pt-2 pb-2 font-bold'}>
                        <div className={'font-serif after:content-["·"] after:px-2 after:text-dark-green '}>世誉初见</div>
                        <div className={'text-slate-800 font-medium '}>大红袍</div>
                    </div>
                    <div className={'pb-6'}>
                        <div className={'font-bold pl-1 pb-4'}>武夷岩茶</div>
                        <div className={'flex font-medium pl-1'}>
                            <div className={'after:content-["/"] after:font-light after:px-1'}>¥217+</div>
                            <div className={'font-light'}>250g(盒)</div>
                        </div>
                    </div>
                    <div className={'pb-12'}>
                        <div className={'font-medium pl-1 pt-2 pb-4'}>选择包装</div>
                        <div className={'grid grid-cols-3 gap-1'}>
                            <div className={'group relative flex flex-col justify-center items-center cursor-pointer'}>
                                <Image className={'h-28 w-24 object-cover overflow-hidden rounded group-hover:rounded-none'} src={Image1} alt={''}/>
                                <div className={'absolute bottom-0 text-white h-28 w-24 p-2 hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-between group-hover:bg-dark-green group-active:block group-active:bg-dark-green'}>
                                    <div>简易包装</div>
                                    <div>¥217/盒</div>
                                </div>
                            </div>
                            <div className={'group relative flex flex-col justify-center items-center cursor-pointer'}>
                                <Image className={'h-28 w-24 object-cover overflow-hidden rounded group-hover:rounded-none'} src={Image1} alt={''}/>
                                <div className={'absolute bottom-0 text-white h-28 w-24 p-2 hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-between group-hover:bg-dark-green group-active:block group-active:bg-dark-green'}>
                                    <div>礼盒包装</div>
                                    <div>¥247/盒</div>
                                </div>
                            </div>
                            <div className={'group relative flex flex-col justify-center items-center cursor-pointer'}>
                                <Image className={'h-28 w-24 object-cover overflow-hidden rounded group-hover:rounded-none'} src={Image1} alt={''}/>
                                <div className={'absolute bottom-0 text-white h-28 w-24 p-2 hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-between group-hover:bg-dark-green group-active:block group-active:bg-dark-green'}>
                                    <div>定制包装</div>
                                    <div>联系客服</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex justify-start items-center space-x-6'}>
                        <div className={'font-medium pl-1'}>数量</div>
                        <div className={'flex justify-center items-center border'}>
                            <div><Minus className={'h-8 w-8 px-2 border-r rounded-l'}/></div>
                            <input className={'w-8 h-8 text-center active:ring-0 focus:border-0 focus:outline-0'} value={'1'}/>
                            <div><Plus className={'h-8 w-8 px-2 border-l rounded-r'}/></div>
                        </div>
                    </div>
                    <div className={'px-6 py-12 space-y-6'}>
                        <Dialog.Root>
                            <Dialog.Trigger className={'w-full'}>
                                <div className={'relative w-full h-14 bg-dark-green text-white cursor-pointer flex justify-center items-center border-2 border-slate-200 font-medium'}>
                                    立即购买
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className={'bg-black/75 fixed inset-0'} />
                                <Dialog.Content className={'bg-white p-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl max-h-[95vh] overflow-auto'}>
                                    <Dialog.Title className={'text-slate-700 font-medium text-xl'}>
                                        联系客服
                                    </Dialog.Title>
                                    <Dialog.Description className={'pt-4'}>
                                        <div></div>
                                    </Dialog.Description>
                                    <Dialog.Close className={'inline-flex h-12 w-12 items-center absolute top-2 right-1'}>
                                        <X/>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>

                        <Dialog.Root>
                                <Dialog.Trigger className={'w-full'}>
                                    <div className={'relative w-full h-14 text-slate-800 cursor-pointer flex justify-center items-center border-2 border-slate-200 font-medium'}>联系客服</div>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className={'bg-black/75 fixed inset-0'} />
                                    <Dialog.Content className={'bg-white p-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl max-h-[95vh] overflow-auto'}>
                                        <Dialog.Title className={'text-slate-700 font-medium text-xl'}>
                                            联系客服
                                        </Dialog.Title>
                                        <Dialog.Description className={'pt-4'}>
                                            <div></div>
                                        </Dialog.Description>
                                        <Dialog.Close className={'inline-flex h-12 w-12 items-center absolute top-2 right-1'}>
                                            <X/>
                                        </Dialog.Close>
                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                    </div>
                </div>
                <div className={'font-serif text-slate-600'}>
                    武夷山大红袍茶叶，是以大红袍茶叶为代表的武夷山著名茶叶，以其独有的香气、色泽、鲜美、醇厚、回甘、馥郁、香醇、醇厚等特点而闻名于世，被誉为“中国名茶之王”。大红袍茶叶是以其独有的香气、色泽、鲜美、醇厚、回甘、馥郁、香醇、醇厚等特点而闻名于世，被誉为“中国名茶之王”。
                </div>
                <div className={'pt-6 pb-12'}>
                    <Accordion.Root type="single">
                        <Accordion.Item value="item-1">
                            <Accordion.Header className={'w-full h-8 border-b-2 border-slate-700'}>
                                <Accordion.Trigger className={'w-full flex justify-between'}>
                                    <span>产品详情</span>
                                    <ChevronDownIcon/>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className={'py-2'}>
                                <div>
                                    <p>品名:世誉初见·大红袍</p>
                                    <p>产地:武夷山核心产区</p>
                                    <p>等级:一级</p>
                                    <p>保质期:三年</p>
                                    <p>生产日期:2023年4月11日</p>
                                    <p>配料:武夷岩茶</p>
                                    <p>存储方法:置于干净容器内，密封、防异味</p>
                                    <p>产品标准号:GB/T18745</p>
                                    <p>监制商:武夷山茶之源茶业有限公司</p>
                                    <p>生产许可证编号:SC11435078213641</p>
                                    <p>生产商:武夷山市枞龙岩茶厂</p>
                                    <p>生产地址:武夷山市武夷下梅村东边源1-10号</p>
                                    <p>经销商:武夷山市世誉茶行</p>
                                    <p>联系电话:13348588573</p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-2">
                            <Accordion.Header className={'w-full h-8 border-b-2 border-slate-700'}>
                                <Accordion.Trigger className={'w-full flex justify-between'}>
                                    <span>饮用指南</span>
                                    <ChevronDownIcon/>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className={'py-2'}>
                                <div>
                                    <p>品名:世誉初见·大红袍</p>
                                    <p>产地:武夷山核心产区</p>
                                    <p>等级:一级</p>
                                    <p>保质期:三年</p>
                                    <p>生产日期:2023年4月11日</p>
                                    <p>配料:武夷岩茶</p>
                                    <p>存储方法:置于干净容器内，密封、防异味</p>
                                    <p>产品标准号:GB/T18745</p>
                                    <p>监制商:武夷山茶之源茶业有限公司</p>
                                    <p>生产许可证编号:SC11435078213641</p>
                                    <p>生产商:武夷山市枞龙岩茶厂</p>
                                    <p>生产地址:武夷山市武夷下梅村东边源1-10号</p>
                                    <p>经销商:武夷山市世誉茶行</p>
                                    <p>联系电话:13348588573</p>
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </div>
        </div>
    </div>
}

export default Page
