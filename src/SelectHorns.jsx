import React from 'react';
import Form from 'react-bootstrap/Form';

class SelectHorns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValues: [
                {value: 0, text:'Zero'},
                {value: 1, text:'One'},
                {value: 2, text:'Two'},
                {value: 3, text:'Three'},
                {value: 100, text:'One Hundred'}
            ]
        }
    }
    
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="selectHorns">
                    <Form.Select aria-label="Select number of horns" 
                                 style={{width: 300 + 'px'}}
                                 onChange={() => { this.props.filterAnimals( event.target.value ) }}
                    >
                        <option value="">Select number of horns</option>
                        { this.state.selectValues.map( selectValue => {
                            return <option key={selectValue.value} value={selectValue.value}>{selectValue.text}</option>
                        }) }
                    </Form.Select>
                </Form.Group>
            </Form>
        );
    }
}

export default SelectHorns;