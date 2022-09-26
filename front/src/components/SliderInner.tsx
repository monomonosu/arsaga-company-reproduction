import type { Link } from "../types/Link";

function SliderInner(props: { linkName: Link }): JSX.Element {
    function linkSubTitle(): string {
        if (props.linkName === "SOLUTION")
            return "事業方針";
        if (props.linkName === "SERVICE")
            return "サービス";
        if (props.linkName === "WORKS")
            return "制作事例";
        if (props.linkName === "COMPANY")
            return "会社情報";
        if (props.linkName === "NEWS")
            return "ニュース";
        if (props.linkName === "KNOWLEDGE")
            return "ナレッジ";
        if (props.linkName === "RECRUIT")
            return "採用情報";
        else
            return "";
    }

    return (
        <div className="o-inner">
            <p className="c-text">{props.linkName}</p>
            <p className="c-text -u-fssmall">{linkSubTitle()}</p>
        </div>

    )
}

export default SliderInner;
