import cn from 'classnames';
import { useAppSelector } from "../../hooks";

export function Deals(): JSX.Element {
  const isMenuOpened = useAppSelector((state) => state.menu.menuStatus.isOpened);
  
  const sectionClassName = cn({
    'section section--closed' : !isMenuOpened,
    'section' : isMenuOpened,
  })
  return (
    <div className={sectionClassName}>
      <p>deals</p>
    </div>
  )
}