import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class LeftList extends Component{
    render() {
        return(
            <div className="left-list">
                <div className="left-list-top">
                    <ul className="left-list-top-left">
                        <li className="active">
                            <Link to="remen">热门</Link>
                        </li>
                        <span>|</span>
                        <li>
                            <Link to="zuixin">最新</Link>
                        </li>
                        <span>|</span>
                        <li>
                            <Link to="pinglun">评论</Link>
                        </li>
                    </ul>

                    <ul className="left-list-top-right">
                        <li>
                            <Link to="benzhouzuire">本周最热</Link>
                        </li>
                        ·
                        <li>
                            <Link to="benyuezuire">本月最热</Link>
                        </li>
                        ·
                        <li>
                            <Link to="lishizuire">历史最热</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default LeftList;