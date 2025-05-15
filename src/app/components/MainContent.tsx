import Select from './Select';
import Map from './Map';
export default function MainContent() {
    return (
        <div className='min-h-screen min-w-screen border-(--border-color) border-[5px]'>
            MainContent
            <Select />
            <Map />
        </div>
    );
}
