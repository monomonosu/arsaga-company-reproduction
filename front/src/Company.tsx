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
                    <div className="o-company-container u-mb-middle">
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
        </div>
    )
}

export default Company;
