import "./styles/main.css"
import "./styles/main.scss";
import { OnScreenJudge } from './components/OnScreenJudge';

const onEnterScreenBeforeElement = (
    <div className="c-title-animation u-inline"></div>
);

const onEnterScreenAfterElement = (
    <div className="c-title-animation u-inline is-animated">
        <p className="title" style={{ color: '#bebebe', opacity: '0', fontSize: '6rem', fontWeight: '700', letterSpacing: '1.5px', textAlign: 'center', margin: '0', padding: '0', }}>Vision</p>
    </div>
)

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
                        <OnScreenJudge before={onEnterScreenBeforeElement} after={onEnterScreenAfterElement} />
                        <p style={{ fontSize: '1.8rem', color: '#bebebe', fontWeight: '700' }}>経営理念</p>
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
                </div>
            </div>
        </div>
    )
}

export default Company;
