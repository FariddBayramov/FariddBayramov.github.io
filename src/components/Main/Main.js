import React, { Component } from 'react';
import { ChevronRight, Description, PlayArrow } from '@material-ui/icons';
import CircleButton from '../CircleButton/CircleButton';
import { Icons } from '../../config/icons';
import './Main.scss';

class Main extends Component {
    constructor() {
        super();
        this.state = { isHiding: false, hidden: false };
        document.body.style.setProperty('overflow', 'hidden');
    }

    render() {
        const wrapperClassNames = [
            'main',
            this.state.isHiding && 'is-hiding'
        ].filter(className => className).join(' ');;

        if (this.state.hidden) {
            return null;
        }

        return (
            <div className={wrapperClassNames}>
                <div className="main-content">
                    
                </div>
                <CircleButton
                    className="to-website"
                    onClick={() => {
                        document.body.style.removeProperty('overflow');
                        this.setState({ isHiding: true });
                        setTimeout(() => this.setState({ hidden: true, isHiding: false }), 1000);
                    }}
                    size={4}
                    tooltip="Go to website"
                >
                    <ChevronRight />
                </CircleButton>
            </div>
        )
    }
}

export default Main;
