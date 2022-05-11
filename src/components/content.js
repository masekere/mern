import { useContext } from 'react';
import Array from './array';
import Toggle from './toggle';
import Object from './object';
import Shallow from './shallow';

export default function Content({ MenuContext }) {
    const { menuBtn } = useContext(MenuContext)
    return (
        <>
            {menuBtn.toggle && <Toggle />}
            {menuBtn.array && <Array />}
            {menuBtn.object && <Object />}
            {menuBtn.shallow && <Shallow />}
        </>
    )
}