import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';

function Rating({ rating }) {
    let arr = [1, 2, 3, 4, 5];
    return (
        <span>
            {arr.map((val, i) => (
                val <= rating ?
                    <StarIcon key={i} className="text-yellow-300" /> :
                    <StarIcon key={i} className="text-gray-200 opacity-50" />
            ))}
        </span>
    );
}

function Card({ url, shopname, rating }) {
    return (
        <Link
            to={"/store/?catagory=" + shopname.trim()}
            className='rounded shadow overflow-hidden'
        >
            <img src={url} alt={shopname} style={{ height: '160px', width: '300px' }} />
            <span className='p-4 flex flex-col gap-2'>
                <span>{shopname}</span>
                <Rating rating={rating} />
            </span>
        </Link>
    );
}

export default Card;