import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="{someValidPath}">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="{someValidPath}">Characters</a></li>
                    /
                    <li><a href="{someValidPath}">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;