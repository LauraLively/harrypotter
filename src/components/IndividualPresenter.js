import React, { Component } from 'react';

class IndividualPresenter extends Component {
    render() {
        const individual = this.props.character
        return (
            <React.Fragment>
                <table>
                    <tr>
                        <td> <a href={`/Character/${individual.name}`}>{individual.name}</a></td>
                    </tr>
                </table>
            </React.Fragment>
        );
    }
}
export default IndividualPresenter;