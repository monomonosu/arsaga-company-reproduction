type Props = {
    valueMain: string;
    valueSub: string;
    valueTexts: Array<string>;
}

export const ValueList = (props: Props) => {
    const { valueMain, valueSub, valueTexts } = props;
    return (
        <dl className="o-value-box">
            <div className="c-value-title">
                <dt>
                    {valueMain}
                </dt>
            </div>
            <div className="value-item">
                <p className="c-sub">
                    {valueSub}
                </p>
                {valueTexts.map((text: string) => <><dd className="c-text">{text}</dd></>)}
            </div>
        </dl>
    )
}

export default ValueList;
