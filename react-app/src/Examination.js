import React, { Component } from 'react';

class Examination extends Component {

    constructor() {
        super();
        this.state = {
            name: '0'
        };

        this.onValChange = this.onValChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onValChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state.name);
    }

    render() {
        return (
            <div className="content-container">
                <div className="content-title-group not-found">
                    <h2 className="title">마음 건강 조사</h2>
                    <div className="about-chamomile">
                        <form onSubmit={this.onSubmitForm}>
                            <p> 평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다. </p>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="0"
                                        checked={this.state.name === '0'}
                                        onChange={this.onValChange} />
                                    <span> 극히드물다 (1일이하)</span>
                                </label>
                            </div>
                            <br />

                            <label>
                                <input
                                    type="radio"
                                    value="1"
                                    checked={this.state.name === '1'}
                                    onChange={this.onValChange} />
                                <span> 가끔 (1~2일)</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="2"
                                    checked={this.state.name === '2'}
                                    onChange={this.onValChange} />
                                <span> 자주 (3~4일)</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="3"
                                    checked={this.state.name === '3'}
                                    onChange={this.onValChange} />
                                <span> 거의 대부분 (5~7일)</span>
                            </label>
                            <br />
                            <br />
                            <button className="button is-primary modal-yes" type="submit">Next</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Examination;
