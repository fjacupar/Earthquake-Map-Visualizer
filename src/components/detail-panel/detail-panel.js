import React from 'react';
import SlidingPane from "react-sliding-pane";
import './detail-panel.css'
import "react-sliding-pane/dist/react-sliding-pane.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { DETAIL_PANEL_TITLE } from '../../constants/constants'
import EarthquakeDetailPanelInfo from '../detail-panel-info/detail-panel-info';

export default class EarthquakeDetailPanel extends React.PureComponent {
    render() {
        return (
            <SlidingPane
                closeIcon={<div><ArrowForwardIosIcon /></div>}
                className="slide-pane"
                isOpen={this.props.location.props.open}
                title={DETAIL_PANEL_TITLE}
                onRequestClose={this.props.location.props.onCloseDetailPanel}>
                <EarthquakeDetailPanelInfo earthQuakeInfo={this.props.location.props.earthquakeClicked}/>
            </SlidingPane>
        );
    }
}