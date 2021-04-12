import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './earthquake-search.css'

export default class EarthquakeSearch extends React.PureComponent {
    render() {
        return (
            <div className={"earthquake-search"}>
                <ReactSearchAutocomplete
                    items={this.props.data}
                    onSelect={this.props.onSelect}
                    resultStringKeyName="id"
                    fuseOptions={{ keys: ["id"] }}
                    autoFocus={false}
                    showIcon={true}
                    placeholder={"Search an earthquake by id"}
                    styling={{
                        height: "46px",
                        border: "2px solid #FF5252",
                        borderRadius: "15px",
                        backgroundColor: "white",
                        hoverBackgroundColor: "#ff000036",
                        fontSize: "18px",
                        fontFamily: "Roboto",
                        lineColor: "#FF5252",
                        placeholderColor: "#FF5252",
                    }}
                />
            </div>
        );
    }
}