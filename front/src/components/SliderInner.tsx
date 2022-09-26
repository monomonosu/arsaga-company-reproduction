import type { Link } from "../types/Link";

function SliderInner(props: { linkName: Link }) {
    console.log(props.linkName);
    return (
        <div>
            <p>{props.linkName}</p>
        </div>
    )
}

export default SliderInner;
