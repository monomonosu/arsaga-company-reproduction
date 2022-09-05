import { useOnScreen } from "./useOnScreen"
import { useRef } from "react";

type Props = {
    before: JSX.Element
    after: JSX.Element
}

export const OnScreenJudge = (props: Props) => {
    const targetRef = useRef(null);
    const targetViewPosition = useOnScreen(targetRef);
    return (
        <>
            {targetViewPosition === 'VISIBLE' && props.after}
            {targetViewPosition === 'ABOVE_VIEWPORT' && props.before}
            {targetViewPosition === 'BELOW_VIEWPORT' && props.before}
            <div ref={targetRef}>
                {/* 位置をチェックする対象の要素 */}
            </div>
        </>
    )
}

export default OnScreenJudge;
