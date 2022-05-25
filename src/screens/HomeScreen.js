import React, { useRef } from 'react';
import CountDown from '../components/CountDown';
import Popup from '../components/Popup';

class HomeScreen extends React.Component
{
    constructor() {
        super()

        this.objPopup = null;

        this.setPopupRef = element => {
            this.objPopup = element;
        }
        
        this.onCompleteTimer = this.onCompleteTimer.bind(this);
    }

    onCompleteTimer(msg)
    {
        this.objPopup.showModal(msg);
    }

    render()
    {
        return (
            <div className='Main'>
                <h1>HomeScreen</h1>
                <Popup ref={this.setPopupRef}/>
                <CountDown seconds={(3600*24) + 5}/>
                <CountDown seconds={3607}/>
                <CountDown seconds={69}/>
                <CountDown message="Woohooo..." seconds={5} onComplete={this.onCompleteTimer}/>
                <CountDown message="Oh yeah!" seconds={8} onComplete={this.onCompleteTimer}/>
                <CountDown message="Heehee!!!" seconds={15} onComplete={this.onCompleteTimer}/>
                <CountDown seconds={3}/>
            </div>
        );
    }
}

export default HomeScreen;