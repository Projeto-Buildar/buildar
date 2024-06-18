export default function Skin(props) {
    return (
        <div style={{background: props.color, padding: '2rem', borderRadius: '4rem'}}>
            <img src={props.url} style={{height: '3rem'}}/>
        </div>
    )
}