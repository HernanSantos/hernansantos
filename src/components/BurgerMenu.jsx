import { BurguerMenu } from "../styledComponents/BurgerMenuStyle"

export const BurgerMenu = (props) => {

  return (
    <BurguerMenu>
      <div onClick={props.handleClick} 
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurguerMenu>
  )
}
