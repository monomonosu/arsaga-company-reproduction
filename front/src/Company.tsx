import "./styles/main.css"
import "./styles/main.scss";
import { OnScreenJudge } from './components/OnScreenJudge';
import ValueList from "./components/ValueList";

const onEnterScreenBeforeElement = (
    <div className="c-title-animation u-inline"></div>
);

function onEnterScreenAfterElement(title: string) {
    return (
        <div className="c-title-animation u-inline is-animated">
            <p className="c-title-text">{title}</p>
        </div>
    )
}

function Company() {
    return (
        <div>
            <p className="c-company-name-vertical">Arsaga Partners, Inc.</p>
            <div className="o-common-container u-mt80">
                <div className="o-container">
                    <div className="o-common-headline u-mb-large">
                        <h4 className="o-headline u-red">COMPANY</h4>
                        <p className="u-text u-red">会社情報</p>
                        <div className="c-vertical-line u-h-large u-red"></div>
                    </div>
                    <div className="o-company-container u-mb-middle">
                        <OnScreenJudge before={onEnterScreenBeforeElement} after={onEnterScreenAfterElement('Vision')} />
                        <div className="o-title">
                            <p className="c-sub">経営理念</p>
                        </div>
                        <h4 className="o-heading">
                            <span className="u-red">“人を作る”</span><span>だから</span><span className="u-red">“物を作れる”</span>
                        </h4>
                        <div className="o-inner u-mb-small">
                            <p className="o-headline u-red">”人を作る”</p>
                            <p className="u-text">
                                ～ 人間をロボットにしない ～
                                <br />
                                考え、苦悩し、幸せを感じられる人をつくる。
                                <br />
                                必要とされる人となる。
                            </p>
                            <div className="c-vertical-line u-h-small u-red"></div>
                        </div>
                        <div className="o-inner">
                            <p className="o-headline u-red">自分自身の存在価値を疑う者たちをなくすため</p>
                            <p className="u-text">
                                人が豊かな状態であるときは、苦楽を感じる状態である。
                                <br />
                                喜怒哀楽があるから幸せが色づく。
                                <br />
                                ロボットではないから人間は魅力がある。魅力ある人間になることが真の目的。
                            </p>
                        </div>
                    </div>
                    <div className="o-company-container u-mb-middle">
                        <OnScreenJudge before={onEnterScreenBeforeElement} after={onEnterScreenAfterElement('Mission')} />
                        <div className="o-title">
                            <p className="c-sub">Vision達成のためのミッション</p>
                        </div>
                        <h4 className="o-heading">
                            <span className="u-red">相互成長する</span>
                            <br />
                            <span className="c-sub">人を支え合う文化を育む</span>
                        </h4>
                        <div className="o-inner u-mb-small">
                            <p className="u-text">
                                相互成長するために、仕事(やりがい)は何でも全力でやる。<br />
                                相互成長するために、バグを否定しない。<br />
                                相互成長するために、否定するなら代替案を。<br />
                                相互成長するために、相手のことをリスペクトする。
                            </p>
                        </div>
                        <div className="o-inner">
                            <p className="o-headline">
                                一人ひとりの成長が物づくりにおける
                                <span className="u-red"> “最高品質を最速で”</span>
                                につながる
                            </p>
                        </div>
                    </div>
                    <div className="o-company-container">
                        <OnScreenJudge before={onEnterScreenBeforeElement} after={onEnterScreenAfterElement('Value')} />
                        <div className="o-title">
                            <p className="c-sub">価値観・行動指針</p>
                        </div>
                        <div className="o-inner u-mb-very-small">
                            <p className="u-text">私たちのVisionやMissionを貫くために必要な8つの指針です。</p>
                        </div>
                        <div className="list">
                            <ValueList
                                valueMain="判断する勇気を持とう"
                                valueSub="判断は脳を使う"
                                valueTexts={[
                                    "「先送りする」という判断をしない。まず判断して、軌道修正すればいい。",
                                    "「目先の対応」と「本来の目的への対応」は別物である。",
                                    "「緊急性が高いこと」ではなく、「真に重要なこと」に時間を使う。そのために「真に重要なこと」は何であるかを判断しよう。",
                                ]}
                            />
                            <ValueList
                                valueMain="相手に伝わる言葉で話してみよう"
                                valueSub="コミュニケーションは脳を使う"
                                valueTexts={[
                                    "傾聴力。人が話したことをそのまま自分で言えるように聴く。",
                                    "発信力。相手が理解できる粒度、言葉遣い、手段を使う。",
                                    "相手の個性や考え方へ敬意を払おう。相手を変えさせることはできない。",
                                    "ストレスの高い状況でも穏やかに接しよう。そのためには自分のストレス状態を知り、解消方法を知る必要がある。",
                                ]}
                            />
                            <ValueList
                                valueMain="行動しよう"
                                valueSub="行動は脳の認識を変える"
                                valueTexts={[
                                    "まず行動、起動しよう。動き始めれば楽しくなる。「作業興奮」を知ろう。",
                                    "幸福に変わる行動をする。最後に幸福を感じれば、脳はさかのぼって良い行動だったと認識する。",
                                ]}
                            />
                            <ValueList
                                valueMain="アルサーガに興味をもとう"
                                valueSub="好奇心は脳が感じる"
                                valueTexts={[
                                    "会社に興味を持つことから始めよう。",
                                    "すべてのメンバーに興味を持とう。",
                                    "会社がやりたいこと、メンバーがやりたいことを理解することで、自分のなすべきことが分かり、仕事に想いが加わる。",
                                    "人間が集中できるのは1日の間で数時間。興味があってもそれだけなので、この時間でいかに最大の成果を出すか。「最高品質を最速で」は興味から実現できる。",
                                ]}
                            />
                            <ValueList
                                valueMain="前提に囚われるな"
                                valueSub="イノベーションは脳から生み出される"
                                valueTexts={[
                                    "課題を言葉にしよう。問題点がわからないと解決策は見つからない。",
                                    "ルールの中からイノベーションは生まれにくい。アルサーガにあるのはガイドライン。",
                                    "ひとりでイノベーションは起こせない。他者を巻き込もう。",
                                    "反乱を起こすくらいの気持ちで！イノベーションが達成されれば「反乱」ではなく「革命」である。",
                                ]}
                            />
                            <ValueList
                                valueMain="責任がある意思決定から逃げない"
                                valueSub="勇気は脳のためらいを超えること"
                                valueTexts={[
                                    "賛否両論を招く意見でも口にできる勇気を持とう。",
                                    "全体チャンネルに発言できる勇気を持とう。",
                                    "やってみると、悩んでいることが些細だったと知ることもある。試行は思考を超える。",
                                    "バリューに反する行動をしてる仲間がいたら指摘してあげる。敵に立ち向かうよりも仲間に立ち向かう方が勇気がいる。",
                                ]}
                            />
                            <ValueList
                                valueMain="静かな情熱でもいい。成功するために力を！"
                                valueSub="情熱は脳から生まれる"
                                valueTexts={[
                                    "最高でありたいという想いは、スピードから生まれる。スピード感があると周りの人は情熱を感じる。即行動しよう！",
                                    "個人にとっての成功はアルサーガの成功。メンバーの成功を強く願おう。",
                                    "そして仲間の成功を祝福しよう！",
                                ]}
                            />
                            <ValueList
                                valueMain="会社の成長を意識することが、自分が成長するための近道"
                                valueSub="成長は脳を使う"
                                valueTexts={[
                                    "自分より、チームにとってベストを優先して考えてみよう。",
                                    "最高のアイデアを探すときは、自分のものに固執しない。",
                                    "同僚を助ける。教えると自分の方が成長する。情けは人のためならず。",
                                    "チーム全体のために情報をシェアしよう。情報を独占しない。",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="o-common-container">
                <div className="o-container">
                    <div className="o-common-headline">
                        <h4 className="o-headline">
                            COMPANY PROFILE
                        </h4>
                        <p className="u-text">会社概要</p>
                        <div className="c-vertical-line u-h-small u-red"></div>
                    </div>
                    <div>
                        <table className="c-company-profile-table">
                            <tbody>
                                <tr>
                                    <th>会社名</th>
                                    <td>アルサーガパートナーズ株式会社</td>
                                </tr>
                                <tr>
                                    <th>設立</th>
                                    <td>2016年1月8日</td>
                                </tr>
                                <tr>
                                    <th>資本金</th>
                                    <td>6億7,000万円（資本準備金含む、2022年7月現在）</td>
                                </tr>
                                <tr>
                                    <th>代表者名</th>
                                    <td>代表取締役社長 CEO/CTO 小俣泰明</td>
                                </tr>
                                <tr>
                                    <th>役員</th>
                                    <td>
                                        取締役：佐藤理一、渡邉直登　社外取締役：山木学<br />
                                        監査役：植田光信　非常勤監査役：茅原淳一
                                    </td>
                                </tr>
                                <tr>
                                    <th>経営アドバイザー</th>
                                    <td>顧問: 海老根智仁、長南伸明</td>
                                </tr>
                                <tr>
                                    <th>従業員数</th>
                                    <td>239名（2022年7月現在）</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>
                                        東京本社<br />
                                        〒150-0043<br />
                                        東京都渋谷区道玄坂一丁目12番1号　渋谷マークシティウエスト15階<br />
                                        <a href="https://www.google.com/maps/place/%E3%82%A2%E3%83%AB%E3%82%B5%E3%83%BC%E3%82%AC%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E3%82%BA%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/@35.658046,139.6980562,15z/data=!4m5!3m4!1s0x0:0xb589d6e007e4621d!8m2!3d35.658046!4d139.6980562">＞Google Map</a><br />
                                        <br />
                                        フロンティアビジョンスタジオ<br />
                                        〒860-0833<br />
                                        熊本県熊本市中央区平成3丁目7番10号<br />
                                        <a href="https://www.fvs-net.co.jp/">＞Webサイト</a><br />
                                        <a href="https://www.google.co.jp/maps/place/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/@32.781619,130.7025103,17z/data=!3m1!4b1!4m5!3m4!1s0x3540f4886b69da0b:0x86599295c6247291!8m2!3d32.7816245!4d130.7046984">＞Google Map</a><br />
                                    </td>
                                </tr>
                                <tr>
                                    <th>事業内容</th>
                                    <td>
                                        ワンストップ型ITシステム開発スタジオ事業<br />
                                        IT新規事業コンサルティング／エンタープライズシステム新規事業企画（DX）開発／<br />
                                        ウェブシステム企画・開発／アプリケーションシステム企画・開発／<br />
                                        ウェブ制作・ウェブマーケティング・コンサルティング<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <section className="o-common-container -u-bgredlight">
                <div className="o-container">
                    <div className="o-common-headline">
                        <h4 className="o-headline">
                            ORIGIN OF THE NAME
                        </h4>
                        <p className="u-text">
                            会社名の由来
                        </p>
                        <div className="c-vertical-line u-h-small u-red"></div>
                    </div>
                    <div className="top-container">
                        <div className="o-container -u-flex">
                            <div className="o-inner">
                                <p className="o-headline u-mb-very-small">ars=アート(技術)</p>
                                <p className="c-text u-mb-very-small">
                                    ラテン語の ars はギリシア語の テクネー に相当し、本来は「芸術」というより、自然に対置される人間の「技」や「技術」を意味する言葉であった。
                                    saga 壮大な物語 この言葉を合体させた造語。 「芸術(デザイン)」と「技術」を兼ね備えた制作集団。新規事業の苦楽を共に歩む。そこにはたくさんの物語がある。
                                    多くの企業にモノ作り力を投資する形でパートナー企業として牽引する
                                </p>
                            </div>
                            <div className="-u-width50">
                                <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/company/back_logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="foot-card">
                <div className="o-inner -u-bgwhite">
                    <div className="o-common-headline -u-mb-60">
                        <h4 className="o-headline">CONTENT</h4>
                        <p className="c-text">外部コンテンツ</p>
                    </div>
                    <div className="o-box">
                        <div className="o-icon">
                            <a className="c-link" href="https://twitter.com/arsagapartners">
                                <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/icon/twitter.svg" alt="Twitter" />
                            </a>
                        </div>
                        <div className="o-icon">
                            <a className="c-link" href="https://www.facebook.com/arsagapartners/">
                                <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/icon/facebook.svg" alt="Facebook" />
                            </a>
                        </div>
                        <div className="o-icon">
                            <a className="c-link" href="https://qiita.com/organizations/arsagapartners">
                                <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/icon/qiita.svg" alt="Qiita" />
                            </a>
                        </div>
                        <div className="o-icon">
                            <a className="c-link" href="https://www.wantedly.com/companies/arsaga">
                                <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/icon/wantedly.svg" alt="Wantedly" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot-card">
                <div className="o-inner">
                    <div className="o-common-headline u-mb-100">
                        <h4 className="o-headline">CONTACT</h4>
                        <p className="c-text">下記よりお気軽にご連絡下さい。</p>
                        <div className="c-vertical-line u-h-small u-red"></div>
                    </div>
                    <div className="c-button-common c-contacttext -u-bgred -u-white -u-mauto">
                        <a className="c-text -u-white" href="https://www.arsaga.jp/contact/">
                            お問い合わせ<br />
                            CONTACT
                        </a>
                    </div>
                    <a className="c-text-link c-text" href="https://line.me/R/ti/p/%40adx5377b">
                        <img className="c-icon" src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/contact/icon/line.png" alt="line" />
                        LINEでお問い合わせ
                    </a>
                </div>
            </div>
            <div className="o-recruit-container">
                <a className="o-box -u-p60" href="https://www.arsaga.jp/recruit/">
                    <h4 className="c-title">RECRUIT</h4>
                    <div className="o-inner">
                        <p className="c-sub">採用情報</p>
                        <div className="c-border">
                            <span className="c-linered"></span>
                            <span className="c-linewhite"></span>
                        </div>
                    </div>
                    <p className="c-text">
                        アルサーガパートナーズ株式会社は、一緒に働く仲間を募集しています。
                        「人間らしく生きる」「自分で考えて行動する」という文化を重視しており、「バグを否定しない」という言葉を掲げています。
                        挑戦をし続けることが一番の成長に繋がると信じているからです。
                        まずは挑戦する第一歩を踏み出してもらえれば幸いです。
                    </p>
                </a>
                <div className="o-box -image">
                    <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/recruit/office.png" alt="recruit" className="o-image" />
                </div>
            </div>
            <div className="o-page-top-container">
                <div className="o-container">
                    <a href="">
                        <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/top.png" alt="page-top" />
                    </a>
                </div>
            </div>
            <footer>
                <div className="o-footer-container">
                    <div className="o-container">
                        <div className="o-box">
                            <div className="o-inner">
                                <div className="o-logo">
                                    <img src="https://www.arsaga.jp/wp-content/themes/new-arsaga-hp-copy/img/common/footer_logo.svg" alt="arsaga" />
                                </div>
                                <p className="c-copyright">Copyright©2019 Arsaga Partners, Inc.</p>
                            </div>
                        </div>
                        <div className="o-footer-list">
                            <div className="o-container">
                                <ul className="list">
                                    <li className="o-item o-headline">
                                        SOLUTION
                                        <span className="c-sub">事業方針</span>
                                    </li>
                                    <li className="o-item -u-mb5">
                                        <a className="o-link -u-mb5 -u-fs12" href="https://www.arsaga.jp/consulting">戦略コンサルティング</a>
                                    </li>
                                    <li className="o-item -u-mb5">
                                        <a className="o-link -u-mb5 -u-fs12" href="https://www.arsaga.jp/service/">IT開発</a>
                                    </li>
                                    <li className="o-item -u-mb5">
                                        <a className="o-link -u-mb5 -u-fs12" href="https://www.arsaga.jp/movie" target="blank">ライブ動画配信ソリューション</a>
                                    </li>
                                    <li className="o-item -u-mb5">
                                        <a className="o-link -u-mb5 -u-fs12" href="https://falcon-db.com/" target="blank">FALCON（人材紹介DB）</a>
                                    </li>
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/service/">
                                            SERVICE&nbsp;
                                            <span className="c-sub">サービス</span>
                                        </a>
                                    </li>
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/works/">
                                            WORKS&nbsp;
                                            <span className="c-sub">制作事例</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list">
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/company/">
                                            COMPANY&nbsp;
                                            <span className="c-sub">会社情報</span>
                                        </a>
                                    </li>
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/news/'?cat=press-release'">
                                            NEWS&nbsp;
                                            <span className="c-sub">ニュース</span>
                                        </a>
                                    </li>
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/recruit/">
                                            RECRUIT&nbsp;
                                            <span className="c-sub">採用情報</span>
                                        </a>
                                    </li>
                                    <li className="o-item">
                                        <a className="o-link" href="https://www.arsaga.jp/contact/">
                                            CONTACT&nbsp;
                                            <span className="c-sub">お問い合わせ</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Company;
