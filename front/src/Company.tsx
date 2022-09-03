import "./styles/main.css"
import "./styles/main.scss";

function Company() {
    return (
        <div>
            <div className="container" style={{ maxWidth: '1000px', textAlign: 'center', margin: '0 auto', padding: '80px 0' }}>
                <div className="o-common-headline u-large">
                    <h4 className="-red" style={{ fontSize: '5.4rem', fontWeight: '500', letterSpacing: '3px', margin: '0', padding: '0' }}>COMPANY</h4>
                    <p className="u-text -red">会社情報</p>
                    <div style={{ width: '1px', height: '100px', backgroundColor: '#e8374a', margin: '0 auto', left: '50%', position: 'absolute' }}></div>
                </div>
                <div className="u-middle">
                    <p style={{ color: '#bebebe', opacity: '1', fontSize: '6rem', fontWeight: '700', letterSpacing: '1.5px', textAlign: 'center', margin: '0', padding: '0' }}>Vision</p>
                    <p style={{ fontSize: '1.8rem', color: '#bebebe', fontWeight: '700' }}>経営理念</p>
                    <h4 style={{ fontSize: '3.6rem', fontWeight: '700', margin: '0 auto 40px' }}>
                        <span className="-red">“人を作る”</span><span>だから</span><span className="-red">“物を作れる”</span>
                    </h4>
                    <div className="inner" style={{ marginBottom: '80px', position: 'relative' }}>
                        <p className="headline -red" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>”人を作る”</p>
                        <p className="u-text">
                            ～ 人間をロボットにしない ～
                            <br />
                            考え、苦悩し、幸せを感じられる人をつくる。
                            <br />
                            必要とされる人となる。
                        </p>
                        <div style={{ width: '1px', height: '40px', backgroundColor: '#e8374a', margin: '0 auto', left: '50%', position: 'absolute' }}></div>
                    </div>
                    <div className="inner">
                        <p className="-red" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '10px' }}>自分自身の存在価値を疑う者たちをなくすため</p>
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
    )
}

export default Company;
