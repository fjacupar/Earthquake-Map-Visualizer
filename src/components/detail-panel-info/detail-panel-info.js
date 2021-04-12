import React from 'react';
import './detail-panel-info.css'
import { formatDate } from '../../utils/utils'

export default class EarthquakeDetailPanelInfo extends React.PureComponent {
    render() {
        return (
            <div>
                <p className={"detail-panel-field"}>Earthquake ID: <span className={"text-info"}>{this.props.earthQuakeInfo.id}</span></p>
                <p className={"detail-panel-field"}>Location: <span className={"text-info"}>{this.props.earthQuakeInfo.properties.place}</span></p>
                <p className={"detail-panel-field"}>Title: <span className={"text-info"}>{this.props.earthQuakeInfo.properties.title}</span></p>
                <p className={"detail-panel-field"}>Date: <span className={"text-info"}>{formatDate(this.props.earthQuakeInfo.properties.time)}</span></p>
                <p className={"detail-panel-field"}>Type: <span className={"text-info"}>{this.props.earthQuakeInfo.properties.type}</span></p>
                <p className={"detail-panel-field"}>Magnitude: <span className={"text-info"}>{this.props.earthQuakeInfo.properties.mag}</span></p>
                <p className={"detail-panel-field"}>State: <span className={"text-info"}>{this.props.earthQuakeInfo.properties.status}</span></p>
            </div>
        );
    }
}