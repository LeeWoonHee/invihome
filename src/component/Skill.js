import "./skill.css"

const Skill = () => {
    return (
        <div className="innerBox">
            <div className="container">
        <div className="skillWrap">
            <section>
                <h2>FRONT END SKILLS</h2>
                <div className="frontWrap">
                    <div className="sbox">
                        <div className="imgBox"><img src="images/icon-html5.svg" /></div>
                        <div className="textBox">
                            <strong>HTML5</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="sbox">
                        <div className="imgBox"><img src="images/icon-css3.svg" /></div>
                        <div className="textBox">
                            <strong>CSS3</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="sbox">
                        <div className="imgBox"><img src="images/icon-js.svg" /></div>
                        <div className="textBox">
                            <strong>JAVASCRIPT</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="sbox">
                        <div className="imgBox"><img src="images/icon-jquery.svg" /></div>
                        <div className="textBox">
                            <strong>JQUERY</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="sbox">
                        <div className="imgBox"><img src="images/icon-react.svg" /></div>
                        <div className="textBox">
                            <strong>REACT</strong>
                            <p></p>
                        </div>
                    </div>
                    <div className="etc">
                        <h2>etc Skills</h2>
                        <div className="etcBox">
                        <div className="ebox">
                            <div className="imgBox"><img src="images/icon-photoshop.svg" /></div>
                            <div className="textBox">
                                <strong>PHOTOSHOP</strong>
                            </div>
                        </div>
                        <div className="ebox">
                            <div className="imgBox"><img src="images/icon-illust.png" /></div>
                            <div className="textBox">
                                <strong>ILLUST</strong>
                     
                            </div>
                        </div>
                        <div className="ebox">
                            <div className="imgBox"><img src="images/icon-git.svg" /></div>
                            <div className="textBox">
                                <strong>GITHUB</strong>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        </div>
    );
};
export default Skill