import React from 'react';


const Menu = () => {
    return (
        <div className="icon-bar">
            <a href="#">
                <img src="./media/icon_color/icon_color_normal.png" alt="" className="colour-normal"/>
            </a>
            <div className="dropup-colour">
                <div className="overlay-colour">
                    <a href="#" className="icon-colour">
                        <img src="./media/icon_color/icon_color_hover.png" alt="" className="colour-hover"/>
                    </a>
                </div>
                <div className="dropup-content">
                    <a>
                        <img src="./media/Vignettes/carpaint_BiancoAlpi.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/carpaint_Grigio.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/carpaint_GrigioMaratea.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/carpaint_NeroRibelle.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/carpaint_RossoFolgore.png" alt=""/>
                    </a>
                </div>
            </div>



            <a href="#">
                <img src="./media/icon_wheel/icon_wheel_normal.png" alt="" className="wheel-normal"/>
            </a>
            <div className="dropup-wheel">
                <div className="overlay-wheel">
                    <a href="#" className="icon-wheel">
                        <img src="./media/icon_wheel/icon_wheel_hover.png" alt="" className="wheel-hover"/>
                    </a>
                </div>
                <div className="wheel-dropup">
                    <a>
                        <img src="./media/Vignettes/rim_01_black.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/rim_01_metal.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/rim_02_black.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/rim_02_metal.png" alt=""/>
                    </a>
                </div>
            </div>


            <a href="#">
                <img src="./media/icon_door/icon_door_normal.png" alt="door" className="door-normal"/>
            </a>
            <div className="dropup-door">
                <div className="overlay-door">
                    <a href="#" className="icon-door">
                        <img src="./media/icon_door/icon_door_hover.png" alt="porte" className="door-hover"/>
                    </a>
                </div>
                <div className="door-dropup">
                    <a>
                        <img src="./media/Vignettes/door_closed.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/door_opened.png" alt=""/>
                    </a>
                </div>
            </div>



            <a href="#">
                <img src="./media/icon_view/icon_view_normal.png" alt="view" className="view-normal"/>
            </a>
            <div className="dropup-view">
                <div className="overlay-view">
                    <a href="#" className="icon-view">
                        <img src="./media/icon_view/icon_view_hover.png" alt="vue" className="view-hover"/>
                    </a>
                </div>
                <div className="view-dropup">
                    <a>
                        <img src="./media/Vignettes/pov_01_ext.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_02_front_bumper.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_03_headlights.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_04_rim.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_05_side.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_06_rearlights.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_07_plate.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_08_steering_wheel.png" alt=""/>
                    </a>
                    <a>
                        <img src="./media/Vignettes/pov_09_passenger_seat.png" alt=""/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Menu;