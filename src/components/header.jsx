import style from './Header.module.css';
export default function Header(){
    return(
        <header>
            <div className="miao flex content justify">
                <img src="/img/dc-logo.png" alt="" className={`${style.width} ${style.margin}`}  />
                <div className="links">
                   <nav className="flex gap style none text">
                    <li> <a href="" className={style.test}>conoscici</a></li>
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
        </header>
    )
}