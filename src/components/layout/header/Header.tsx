import {Logo} from "./logo";
import  styles  from "./Header.module.scss";

type Props={
    isAccountVisible:boolean;
};

function Header({isAccountVisible}:Props){
    return(
        <header className={styles.header}>
            <Logo/>
            {isAccountVisible }
        </header>
    );
}

export {Header};