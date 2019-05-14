import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            actors: [
                {
                    name: 'Billy Bob',
                    occupation: 'Actor',
                    nickname: 'Turd Burglar'
                },
                {
                    name: 'Halfthor',
                    title: 'The Mountain',
                    age: 45,
                    occupation: 'Strongman',
                    hairColor: 'Bald',
                },
                {
                    name: 'RDJ',
                    title: 'Iron Man',
                    occupation: 'Actor',
                    hobby: 'Sobriety',
                }
            ],
            userInput: " ",
            filteredActors: []
        }

    }

    handleChange(val) {
        this.setState({ userInput: val })
    }


    filterActors(prop) {
        let actors = this.state.actors;
        let filteredActors = [];

        for (let i = 0; i < actors.length; i++) {
            if (actors[i].hasOwnProperty(prop)) {
                filteredActors.push(actors[i])
            }
        }
        this.setState({ filteredActors: filteredActors })
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">

                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.actors, null, 15)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterActors(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredActors)}</span>

            </div>
        )
    }
}

export default FilterObject;