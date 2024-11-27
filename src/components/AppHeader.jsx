import MainMenu from "./MainMenu";

export default function AppHeader() {
    const title = 'BLOG';
    return (
        <header>
            <h1>{title}</h1>
            <MainMenu />
        </header>
    )
}