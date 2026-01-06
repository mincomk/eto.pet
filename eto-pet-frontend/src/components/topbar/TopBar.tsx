import closeeto from '../../assets/closeeto.png';
import { text, topBar } from './TopBar.css';

export function TopBar({ onCheek }: { onCheek: () => void }) {
    return (
        <header className={topBar}>
            <img src={closeeto} alt="eto closed" onClick={onCheek} />
            <div className={text}>eto.pet</div>
        </header>
    );
}
