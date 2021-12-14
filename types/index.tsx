export interface IButton {
    text: string
    onClick: ()=> void;
   
  }

  export interface IModal {
    name: string
    filmsTitle?: string
    director?: string
    planetsNames?: string
    gender?: string
    birthYear?: any
    height?: number
    eyeColor?: string
    hairColor?: string
    skinColor?: string
    mass?: any
    open?: any
    onClose?:any
    films?:[]
  }

  export interface ILayout {
    children: JSX.Element; 
  }