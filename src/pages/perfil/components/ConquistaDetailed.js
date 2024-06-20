export default function ConquistaDetailed(props) {
    <li>
        <img src={props.url} style={{background: props.color}}/>
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </li>
}