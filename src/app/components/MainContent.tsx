import Select from './Select';
import Map from './Map';
export default function MainContent() {
    return (
        <div className='flex min-h-screen min-w-screen'>
            <Select />
            <Map />
        </div>
    );
}
