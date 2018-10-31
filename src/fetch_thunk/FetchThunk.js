import React, { Component } from 'react';
import { css } from 'react-emotion';
import { SyncLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class FetchThunk extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.actions.requestApi();
    }
    
    render() {
        return (
            <div style={{ "width": "100%", "height": "100vh" }}>
                <div style={{ "display": "flex" }}>
                    {
                        this.props.isLoading &&
                        <SyncLoader
                            className={override}
                            sizeUnit={"px"}
                            size={10}
                            color={'#123abc'}
                            loading={this.props.isLoading}
                        />
                    }
                </div>
                {
                    this.props.error &&
                    <div>Error While reterving Data</div>
                }
                <div>
                    {
                        this.props.data && !this.props.isLoading && <pre>{JSON.stringify(this.props.data)}</pre>
                    }
                </div>
            </div>
        );
    }
}
export default FetchThunk;