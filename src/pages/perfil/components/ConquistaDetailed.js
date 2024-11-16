export default function ConquistaDetailed(props) {
    return (
        <li>
            <img alt="" src={props.url} style={{ background: props.color }} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </li>
    )
}