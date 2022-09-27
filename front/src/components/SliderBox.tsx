import type { Link } from "../types/Link";
import type { HeaderSubLink } from "../types/HeaderSubLink";

function SliderBox(props: { linkName: Link }): JSX.Element {
    function contents(): HeaderSubLink[] {
        if (props.linkName === "SOLUTION")
            return [
                { target: "", contentsTitle: "戦略コンサルティング", contentsLink: "https://www.arsaga.jp/consulting" },
                { target: "", contentsTitle: "IT開発", contentsLink: "https://www.arsaga.jp/service/" },
                { target: "_blank", contentsTitle: "資本業務提携支援サービス「シリーズN」", contentsLink: "https://www.series-n.jp/" },
                { target: "_blank", contentsTitle: "ライブ動画配信ソリューション", contentsLink: "https://www.arsaga.jp/movie" },
                { target: "_blank", contentsTitle: "FALCON（人材紹介DB）", contentsLink: "https://falcon-db.com/" },
            ];
        if (props.linkName === "SERVICE")
            return [
                { target: "", contentsTitle: "サービスTOP", contentsLink: "https://www.arsaga.jp/service/" },
                { target: "", contentsTitle: "メリット", contentsLink: "https://www.arsaga.jp/service/#merit" },
                { target: "", contentsTitle: "プロジェクトの流れ", contentsLink: "https://www.arsaga.jp/service/#schedule" },
                { target: "", contentsTitle: "開発分野", contentsLink: "https://www.arsaga.jp/service/#field" },
                { target: "", contentsTitle: "開発領域", contentsLink: "https://www.arsaga.jp/service/#area" },
            ];
        if (props.linkName === "WORKS")
            return [
                { target: "", contentsTitle: "制作実例TOP", contentsLink: "https://www.arsaga.jp/works/" },
            ];
        if (props.linkName === "COMPANY")
            return [
                { target: "", contentsTitle: "会社情報TOP", contentsLink: "https://www.arsaga.jp/company/" },
                { target: "", contentsTitle: "経営理念", contentsLink: "https://www.arsaga.jp/company/#content" },
                { target: "", contentsTitle: "会社概要", contentsLink: "https://www.arsaga.jp/company/#profile" },
                { target: "", contentsTitle: "会社名の由来", contentsLink: "https://www.arsaga.jp/company/#origin" },
                { target: "", contentsTitle: "役員紹介", contentsLink: "https://www.arsaga.jp/member" },
                { target: "", contentsTitle: "IR情報", contentsLink: "https://www.arsaga.jp/ir/" },
            ];
        if (props.linkName === "NEWS")
            return [
                { target: "", contentsTitle: "ニュースTOP", contentsLink: "https://www.arsaga.jp/news/'?cat=press-release'" },
                { target: "", contentsTitle: "Arsaga Insights", contentsLink: "https://www.notion.so/arsagajp/0aa1409e36604c70a5257cef2650e223" },
            ];
        if (props.linkName === "KNOWLEDGE")
            return [
                { target: "", contentsTitle: "DX用語辞典", contentsLink: "https://www.arsaga.jp/knowledge/dx-technical-glossary/" },
            ];
        if (props.linkName === "RECRUIT")
            return [
                { target: "", contentsTitle: "採用情報TOP", contentsLink: "https://www.arsaga.jp/recruit/" },
                { target: "", contentsTitle: "社員インタビュー", contentsLink: "https://www.arsaga.jp/recruit/#interview" },
                { target: "", contentsTitle: "データでみるアルサーガ", contentsLink: "https://www.arsaga.jp/recruit/#data" },
                { target: "", contentsTitle: "文化", contentsLink: "https://www.arsaga.jp/recruit/#culture" },
                { target: "", contentsTitle: "働く環境", contentsLink: "https://www.arsaga.jp/recruit/#workstyle" },
                { target: "", contentsTitle: "募集職種", contentsLink: "https://www.arsaga.jp/recruit/#position" },
                { target: "", contentsTitle: "エントリー", contentsLink: "https://www.arsaga.jp/entry/" },
            ];
        else
            return [{ target: "", contentsTitle: "", contentsLink: "" }];
    }

    return (
        <div className="o-box">
            {contents().map((content) => (<a className="c-link" target={content.target} href={content.contentsLink}>{content.contentsTitle}</a>))}
        </div>

    )
}

export default SliderBox;
