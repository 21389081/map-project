'use client';
import dynamic from 'next/dynamic';
import Select from './Select';
// 引用元件並關閉伺服器渲染
const Map = dynamic(() => import('./Map'), {
    ssr: false, // 關閉伺服器渲染
});
export default function MainContent() {
    return (
        <div className='flex min-h-screen min-w-screen'>
            <Select />
            <Map />
        </div>
    );
}
