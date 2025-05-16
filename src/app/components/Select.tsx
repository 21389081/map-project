'use client';
import SlideButton from './SlideButton';
import { useState } from 'react';
export default function Select() {
    const [value, setValue] = useState(0.5);
    return (
        <div className='flex flex-col items-center border-e-[5px] border-[var(--border-color)]'>
            <form className=' bg-(--second-background) rounded-2xl m-5 border-4 border-[var(--border-color)] p-5 space-y-4 min-w-[300px]'>
                <div className='text-3xl font-bold'>篩選條件</div>
                <div className='text-2xl font-bold flex justify-between'>
                    餐廳 <SlideButton />
                </div>
                <div className='text-2xl font-bold flex justify-between'>
                    飲料店 <SlideButton />
                </div>
                <hr className='border-[var(--slider-background)] border-2'></hr>
                <div className='text-2xl font-bold flex justify-between'>篩選範圍</div>
                <input
                    type='range'
                    className='slider w-full rounded-full appearance-none h-2'
                    min='0.5'
                    max='10'
                    step='0.5'
                    value={value}
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                ></input>
                <div className='w-full flex justify-end text-sm font-bold'>{value}公里</div>
                <button className='rounded-3xl border-4 border-[var(--border-color)] p-1 bg-[var(--orange-color)] w-full text-4xl font-bold py-3'>
                    開抽
                </button>
            </form>
        </div>
    );
}
