import React, { Component } from 'react';
import "./containerone.css";
import ceepc from "../Assets/Pics/ceepc.png";
import logoc1 from "../Assets/Pics/LOGO_c_1.png"



class ContainerOne extends Component {
    render() {
        return (

            <div className="cards">
                <article className="card">
                    <img src={ceepc} alt="ceepc" />

                    <div className="text">
                        <p>Dobrodošli na Facultas English</p>
                        <p>Želite učiti jezik od najboljih?</p>
                        <p>Želite steći svjetski priznatu diplomu?</p>
                        <p>Želite da Vaše dijete uči engleski jezik po Cambridge English programu?</p>
                        <p>Želite učiti jezik od najboljih?</p>
                    </div>
                </article>

                <article className="card">
                    <img src={logoc1} alt="ceepc" />
                    <div className="text">
                        <p>CAMBRIDGE CENTAR FACULTAS je jedinstveni ispitni i pripremni jezički centar u Sarajevu.</p>
                        <p>Želite učiti jezik od najboljih?</p>
                        <p>Želite steći svjetski priznatu diplomu?</p>
                        <p>Želite da Vaše dijete uči engleski jezik po Cambridge English programu?</p>
                    </div>
                </article>
            </div>
        );
    }
}

export default ContainerOne;