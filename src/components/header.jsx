import LinksCard from './LinksCard'
import links from '../assets/links'
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
                    {links.map((link)=>{
                        return <LinksCard
                        key={link.id}
                        title={link.title}
                        />
                    })}
                    </nav>
                </div>
            </div>
            <div className='test'>
                <div className="flex wrap align gap3 pad">
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