import React, { Component } from 'react';
class Examination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: `With the right pattern, applications will be more scalable and easier to maintain.
                If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
            radioGroup: {
                0: true,
                1: false,
                2: false,
                3: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            selectedValue: 'node'
        }
        // this.onValueChange = this.onValueChange.bind(this);
        // this.formSubmit = this.formSubmit.bind(this);
    }
    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked // true
        this.setState({ radioGroup: obj })
    }

    // onValueChange(event) {
    //     this.setState({
    //         selectedOption: event.target.value
    //     });
    // }

    // formSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.selectedOption)
    // }

    render() {
        return (
            <div className="content-container">
                <div className="content-title-group not-found">
                    <h2 className="title">마음 건강 조사</h2>
                    <div className="about-chamomile">
                        <p> 평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다. </p>
                        <label>
                            <input type="radio" name="radioGroup" value='0' checked={this.state.radioGroup[0]} onChange={this.handleRadio} />
                            극히드물다 (1일이하)
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="radioGroup" value='1' checked={this.state.radioGroup[1]} onChange={this.handleRadio} />
                            가끔 (1~2일)
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="radioGroup" value='2' checked={this.state.radioGroup[2]} onChange={this.handleRadio} />
                            자주 (3~4일)
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="radioGroup" value='3' checked={this.state.radioGroup[3]} onChange={this.handleRadio} />
                            거의 대부분 (5~7일)
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Examination;
