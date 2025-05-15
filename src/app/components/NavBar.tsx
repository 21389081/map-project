export default function NavBar() {
    return (
        <div className='bg-(--secend-background) border-y-[5px] border-(--border-color) p-3 flex justify-between items-center'>
            <div>NavBar</div>
            <div className='flex gap-3 items-center'>
                <div>抽取歷史</div>
                <div>個人資料</div>
                <button className='rounded-md border-[3px] border-(--border-color) p-1 bg-(--orange-color)'>
                    登入
                </button>
            </div>
        </div>
    );
}
