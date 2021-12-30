import React from 'react';
import Nav from '../../components/Navbar/Navbar';
import styles from './Home.module.css';

const Home = () => {

    const spots = [
        {"numb": 230,"color": "btnTransparent", "time": "5", "count": "2"},
        {"numb": 231,"color": "btnTransparent", "time": "20", "count": "0"},
        {"numb": 232,"color": "btnTransparent", "time": "2", "count": "1"},
        {"numb": 233,"color": "btnGreen", "time": "10", "count": "2"},
        {"numb": 234,"color": "btnRed", "time": "32", "count": "0"},
        {"numb": 235,"color": "btnTransparent", "time": "23", "count": "0"},
        {"numb": 236,"color": "btnTransparent", "time": "43", "count": "0"},
        {"numb": 237,"color": "btnTransparent", "time": "19", "count": "0"},
        {"numb": 238,"color": "btnGreen", "time": "52", "count": "0"},
        {"numb": 239,"color": "btnTransparent", "time": "38", "count": "0"},
        {"numb": 240,"color": "btnTransparent", "time": "37", "count": "0"},
        {"numb": 241,"color": "btnGreen", "time": "7", "count": "1"},
        {"numb": 242,"color": "btnTransparent", "time": "24", "count": "0"},
        {"numb": 243,"color": "btnRed", "time": "21", "count": "0"},
        {"numb": 244,"color": "btnTransparent", "time": "12", "count": "1"},
        {"numb": 245,"color": "btnGreen", "time": "12", "count": "0"},
        {"numb": 246,"color": "btnTransparent", "time": "35", "count": "0"},
        {"numb": 247,"color": "btnGreen", "time": "24", "count": "0"},
        {"numb": 248,"color": "btnTransparent", "time": "16", "count": "0"},
        {"numb": 249,"color": "btnRed", "time": "28", "count": "0"},
        {"numb": 250,"color": "btnTransparent", "time": "32", "count": "1"},
    ]

    return (
        <>
        <Nav/>
        <div className="container mt-2">
            <div className="row">
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnBlue].join(' ')}>
                        MORE <i className="far fa-caret-square-down"></i>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnBlue].join(' ')}>
                        SEARCH <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnGreen].join(' ')}>
                        ARRIVAL <i className="fas fa-tag"></i>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnBlue].join(' ')}>
                        IN/OUT <i className="far fa-clock"></i>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnBlue].join(' ')}>
                        STATUS <i className="fas fa-map-marker-alt"></i>
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button type="button" className={[styles.button, styles.btnRed].join(' ')}>
                        DEPART <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <hr />
            {/* row 1 */}
            <div className="row">
                { spots.map((item) => {
                    return(
                        <div key={item.numb} className="col-4 text-center">
                            <button 
                                type="button" 
                                className={["square bulle", item.color].join(' ')}
                                data-count={item.count}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        {item.numb}
                                    </div>
                                    <div className={["col-12", styles.btnMinute].join(' ')}>
                                    {item.time}min
                                    </div>
                                </div>
                                
                            </button>
                        </div>
                        );
                    })
                }
        </div>
        
        </div>
        </>
    );
};

export default Home;