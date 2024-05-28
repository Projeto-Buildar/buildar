export default function Depoiment(props) {
    return (
        <div className='depoiments'>
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <h3>{props.age} anos</h3>
            <p>{props.text}</p>
        </div>
    )
}