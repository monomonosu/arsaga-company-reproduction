import { useState } from "react";
import type { Link } from "../types/Link";

function HeaderLink(props: { linkName: Link, linkSubTitle: string, linkUrl: string, setHoverLinkName: React.Dispatch<React.SetStateAction<Link>> }): JSX.Element {
    const [dropDownBox, setDropDownBox] = useState<JSX.Element>(
        <>
            <li id={props.linkName} className="o-list" onMouseEnter={() => listEnterLink(props.linkName)} onMouseLeave={() => listLeaveLink(props.linkName)}>
                <a className="c-link" href={props.linkUrl}>
                    <p className="c-text">{props.linkName}</p>
                    <p className="c-text -u-fssmall">{props.linkSubTitle}</p>
                </a>
            </li>
        </>
    );
    function listEnterLink(linkName: Link) {
        props.setHoverLinkName(linkName);
        setDropDownBox(
            <>
                <li id={props.linkName} className="o-list" onMouseEnter={() => listEnterLink(props.linkName)} onMouseLeave={() => listLeaveLink(props.linkName)}>
                    <a className="c-link" href={props.linkUrl}>
                        <p className="c-text">{props.linkName}</p>
                        <p className="c-text -u-fssmall">{props.linkSubTitle}</p>
                    </a>
                    <div style={{ position: "relative" }}>
                        <div className="c-arrow"></div>
                    </div>

                </li>
            </>
        )
    }
    function listLeaveLink(linkName: Link) {
        setDropDownBox(
            <>
                <li id={props.linkName} className="o-list" onMouseEnter={() => listEnterLink(props.linkName)} onMouseLeave={() => listLeaveLink(props.linkName)}>
                    <a className="c-link" href={props.linkUrl}>
                        <p className="c-text">{props.linkName}</p>
                        <p className="c-text -u-fssmall">{props.linkSubTitle}</p>
                    </a>
                </li>
            </>
        )
    }
    return dropDownBox;
}

export default HeaderLink;
