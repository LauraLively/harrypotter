import React, { Component } from "react";
import HarryPotter from "../data/HarryPotter.json";
import IndividualDetails from "../components/IndividualDetailsPresenter";

class IndividualDetailController extends Component {
    mapNames = character => {
        return character.map(ch => <IndividualDetails character={ch} />);
      };
      filterByName = name => {
        return HarryPotter.filter(ch => ch.name === name);
      };
      render() {
        const name = this.props.match.params.id;
        const character = this.filterByName(name);
        return (
          <React.Fragment>
            <h2>Character</h2>
            <ul>{this.mapNames(character)}</ul>
          </React.Fragment>
        );
      }
    }
      export default IndividualDetailController;