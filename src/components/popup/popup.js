import React from 'react';
import './popup.css';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import EarthquakePopUpInfo from '../popup-info/popup-info';
import { POPUP_TITLE } from '../../constants/constants';

const StyledPopup = withStyles({
    paper: {
        minWidth: "315px",
        maxWidth: "315px",
        borderRadius: "10px",
        backgroundColor: "#928e8e"
    }
})(Popover);


export default class EarthquakePopUp extends React.PureComponent {
    render() {
        return (
            <StyledPopup
                open={this.props.open}
                anchorEl={this.props.anchorEl}
                anchorPosition={this.props.anchorPosition}
                anchorReference='anchorPosition'
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={() => this.props.onCloseEarthquakePopUp()}>
                <h4 className={"popup-title"}>{POPUP_TITLE}</h4>
                <a className={"close-popup"} href="#" onClick={this.props.onCloseEarthquakePopUp}></a>
                <EarthquakePopUpInfo earthquakeInfo={this.props.earthquakeClicked} clickDetailButton={this.props.onClickSeeDetailButton} />
            </StyledPopup>
        );
    }
}