import React from 'react';

class Popup extends React.Component
{
    constructor() {
        super()

        this.sMessage = "Default";

        this.state = {
            style : { display: "none" }
        }
        
        //console.log(this.state.style);

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() 
    {
        
    }
  
    componentWillUnmount() 
    {

    }

    showModal(msg)
    {
        //console.log("msg"+msg)
        this.sMessage = msg;

        this.setState({
            style : { display: "block" }
        });
    }

    hideModal()
    {
        this.setState({
            style : { display: "none" }
        });
    }

    render()
    {
        return (
            <div className='Modal' style={this.state.style}>
                <div className='Modal-Box'>
                    <span className="Modal-Close" onClick={this.hideModal}>&times;</span>
                    <div className="Modal-Content">
                        
                        <p>{this.sMessage}</p>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;