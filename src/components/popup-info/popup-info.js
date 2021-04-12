import React from 'react';
import './popup-info.css';
import Button from '@material-ui/core/Button';
import { POPUP_SEE_DETAIL_TEXT } from '../../constants/constants';

// Componente de función (aquellos componentes que solo tienen un método render y no almacenan estado)
export default class EarthquakePopUpInfo extends React.PureComponent {
    render() {
        return (
            <div>
                <p className={"popup-field"}>Earthquake ID: <span className={"popup-text"}>{this.props.earthquakeInfo.id}</span></p>
                <p className={"popup-field"}>Location: <span className={"popup-text"}>{this.props.earthquakeInfo.properties.place}</span></p>
                <Button className={"see-detail-button"} variant="outlined" size="medium" onClick={this.props.clickDetailButton}>
                    {POPUP_SEE_DETAIL_TEXT}</Button>
            </div>
        );
    }
}
