import React from 'react';
import ComponentWithStaticPropTypes from './ComponentWithStaticPropTypes';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="thursday">
                <ComponentWithStaticPropTypes
                    boolProp={true}

                    funcProp={() => {
                        console.log('cleofrom5to7');
                    }}
                />
            </div>
        );
    }
}
