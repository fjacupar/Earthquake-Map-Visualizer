import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../index.css';
import DeckGL from '@deck.gl/react';
import { BASEMAP } from '@deck.gl/carto';
import { StaticMap } from 'react-map-gl';
import { FlyToInterpolator } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import EarthquakeIconReviewed from '../../assets/images/earthquake-reviewed.png';
import EarthquakeAutomatic from '../../assets/images/earthquake-automatic.png';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { EARTHQUAKE_DATA_API_URL, MAPBOX_ACCESS_TOKEN, INITIAL_VIEW_STATE } from '../../constants/constants';
import EarthquakePopUp from '../popup/popup';
import EarthquakeSearch from '../earthquake-search/earthquake-search';


class Map extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            loading: true,
            isEarthquakeClicked: false,
            earthquakeClicked: null,
            anchorEl: null,
            anchorPosition: { left: null, top: null },
            initialViewState: INITIAL_VIEW_STATE,
            layer: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(EARTHQUAKE_DATA_API_URL)
                .then(response => response.json())
                .then(response => {
                    this.setState({ data: response.features, loading: false });
                    this.createLayer();
                });
            if (!response.ok) {
                throw Error(response.statusText);
            }

        } catch (error) {
            console.log(error);
        }
    }

    handleClickOnEarthquake = (event) => {
        let htmlElement = document.body
        this.setState({
            isEarthquakeClicked: true,
            earthquakeClicked: event.object,
            anchorEl: htmlElement,
            anchorPosition: {
                left: event.pixel[0], top: event.pixel[1]
            }
        });
    }

    handleCloseEarthquakePopUp = () => {
        this.setState({
            isEarthquakeClicked: false,
            earthquakeClicked: null,
            anchorEl: null,
            anchorPosition: { left: null, top: null }
        });
    }

    handleOpenDetailPanel = () => {
        this.props.history.push({
            pathname: '/earthquakeDetail/' + this.state.earthquakeClicked.id,
            props: { open: true, onCloseDetailPanel: this.handleCloseEarthquakeDetailPanel, earthquakeClicked: this.state.earthquakeClicked }
        })
        this.handleCloseEarthquakePopUp();
    }

    handleCloseEarthquakeDetailPanel = () => {
        this.props.history.push({ pathname: '/' })
    }

    handleEarthQuakedSearched = (event) => {
        this.setState({
            earthquakeClicked: event,
            initialViewState: {
                longitude: event.geometry.coordinates[0],
                latitude: event.geometry.coordinates[1],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                minZoom: 2,
                maxZoom: 15,
                transitionInterpolator: new FlyToInterpolator(),
                transitionDuration: 3500,
                onTransitionEnd: () => {
                    this.props.history.push({
                        pathname: '/earthquakeDetail/' + event.id,
                        props: { open: true, onCloseDetailPanel: this.handleCloseEarthquakeDetailPanel, earthquakeClicked: this.state.earthquakeClicked }
                    })
                }
            }
        });

    }

    createLayer = () => {
        this.setState({
            layer: new IconLayer({
                id: 'IconLayer',
                data: this.state.data,
                getIcon: d => ({
                    url: d.properties.status === 'reviewed' ? EarthquakeIconReviewed : EarthquakeAutomatic,
                    width: 550,
                    height: 600,
                    anchorY: 128
                }),
                getPosition: d => d.geometry.coordinates,
                getSize: d => 5,
                sizeScale: 12,
                pickable: true,
                onClick: (event) => {
                    this.handleClickOnEarthquake(event);
                }
            })
        });
    }


    render() {
        let loader, earthquakePopUp, earthQuakeSearch, map;

        if (this.state.loading) {
            loader = <Loader className={"loader"} type="Rings" color="red" height={150} width={150} />
        }
        else {
            map = <DeckGL
                getCursor={() => "pointer"}
                initialViewState={this.state.initialViewState}
                controller={true}
                layers={[this.state.layer]} >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle={BASEMAP.VOYAGER_LABELS} />
            </DeckGL>;

            earthQuakeSearch = <EarthquakeSearch
                data={this.state.data}
                onSelect={this.handleEarthQuakedSearched}>
            </EarthquakeSearch>;

            if (this.state.isEarthquakeClicked) {
                earthquakePopUp = <EarthquakePopUp
                    open={this.state.isEarthquakeClicked}
                    anchorEl={this.state.anchorEl}
                    anchorPosition={this.state.anchorPosition}
                    onCloseEarthquakePopUp={this.handleCloseEarthquakePopUp}
                    earthquakeClicked={this.state.earthquakeClicked}
                    onClickSeeDetailButton={this.handleOpenDetailPanel} />;
            }

        }

        return (
            <div>
                {loader}
                {map}
                {earthQuakeSearch}
                {earthquakePopUp}
            </div>
        );
    }
}

export default withRouter(Map);