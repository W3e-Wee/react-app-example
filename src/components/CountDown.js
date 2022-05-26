import React from 'react';

class CountDown extends React.Component
{
    constructor() {
        super();

        this.state = {
            hrs: "00",
            min: "00",
            sec: "00",
        };

        this.runTimer = this.runTimer.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
    }

    componentDidMount() 
    {
        this.iSec = this.props.seconds;

        //console.log(this.props.message);

        this.updateTimer();

        this.iIntervalID = setInterval(
            () => this.runTimer(), 
            1000
        );
    }
  
    componentWillUnmount() 
    {
        clearInterval(this.iIntervalID);
    }

    runTimer()
    {
        this.iSec--;
        if(this.iSec <= 0)
        {
            this.iSec = 0;

            if(this.props.onComplete != null)
            {
                //console.log(this.props.message);
                this.props.onComplete(this.props.message);
            }
            
            clearInterval(this.iIntervalID);
        } 

        //console.log(this.iSec);

        this.updateTimer();
    }

    updateTimer()
    {
        let iDisplayHrs = Math.floor(Math.floor(this.iSec / 60) / 60);
        let sDisplayHrs = "" + iDisplayHrs;
        if(iDisplayHrs < 10) sDisplayHrs = "0"+ iDisplayHrs;

        let iDisplayMin = Math.floor(this.iSec / 60) % 60;
        let sDisplayMin = String(iDisplayMin);
        if(iDisplayMin < 10) sDisplayMin = "0"+String(iDisplayMin);

        let iDisplaySec = this.iSec % 60;
        let sDisplaySec = String(iDisplaySec);
        if(iDisplaySec < 10) sDisplaySec = "0"+String(iDisplaySec);

        this.setState({
            hrs: sDisplayHrs,
            min: sDisplayMin,
            sec: sDisplaySec
        });
    }

    render()
    {
        

        return (
            <div className='CountDown'>
                <h2>Time: {this.state.hrs +":"+ this.state.min +":"+ this.state.sec}</h2>
            </div>
        );
    }
}

export default CountDown;