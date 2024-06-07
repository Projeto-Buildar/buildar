import './btnsNav.css'

export default function BtnsNav(props){
    return(
        <a className='btnsNav'>
            {props.texto}
        </a>
    );
}