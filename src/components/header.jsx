import ComicsCard from './ComicsCard';
import comics from '../assets/comics'
import style from './Header.module.css';
export default function Header() {
    return (
        <header>
            <div className="miao flex content justify wrap">
                <img src="/img/dc-logo.png" alt="" className={`${style.width} ${style.margin}`} />
                <div className="links">
                    <nav className="flex gap style none text">
                        <li> <a href="">conoscici</a></li>
                        <li><a href="">andiamo al mare </a></li>
                        <li><a href="">controlliamo la spazzatura </a></li>
                        <li><a href="">corallo</a></li>
                        <li><a href="">miao</a></li>
                        <li><a href="">proa</a></li>
                        <li><a href="">cammello</a></li>
                        <li><a href="">patata</a></li>
                        <li><a href="">superlativo</a></li>
                        <li><a href="">croato</a></li>
                    </nav>
                </div>
            </div>
            <div className='test'>
                <div className="flex wrap align gap pad">
                        {comics.map((comic) => {

                            return <ComicsCard
                                key={comic.id}
                                image={comic.thumb}
                                title={comic.series}
                            />
                        })}
                </div>
                <div>
                    <h4 className='color2'>load more</h4>
                </div>
            </div>
        </header>

    )
}