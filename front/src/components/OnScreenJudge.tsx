import { useOnScreen } from "./useOnScreen"
import { useRef } from "react";

export const OnScreenJudge = () => {
    const targetRef = useRef(null);
    const targetViewPosition = useOnScreen(targetRef);
    return (
        <>
            {targetViewPosition === 'VISIBLE' && <p>画面内に表示されています</p>}
            {targetViewPosition === 'ABOVE_VIEWPORT' && <p>画面より上に表示されています</p>}
            {targetViewPosition === 'BELOW_VIEWPORT' && <p>画面より下に表示されています</p>}
            <div ref={targetRef}>位置をチェックする対象の要素</div>
        </>
    )
}

export default OnScreenJudge;
