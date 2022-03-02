export interface Props{
    title: string
    color?: string
}

const Header =  (props: Props) =>{
    return(
        <header>
            <h1 style= {{color: props.color ? props.color : 'blue' }}>{props.title}</h1>  {/* se prop color existe usa a cor recebida, se não define como azul */ }
        </header>
    )

}

export default Header