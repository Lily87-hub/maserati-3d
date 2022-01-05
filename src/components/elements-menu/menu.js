import React from 'react';


const Menu = () => {
    return (
        <div className="icon-bar">
            <a href="#">
                <img src="./media/icon_color/icon_color_normal.png" alt="color"/>
            </a>
            <div className="dropup-colour">
                <div className="overlay-colour">
                    <a href="#" className="icon-colour">
                        <img src="./media/icon_color/icon_color_hover.png" alt="couleur"/>
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
                <img src="./media/icon_wheel/icon_wheel_normal.png" alt="wheel"/>
            </a>
            <div className="overlay-wheel">
                <a href="#" className="icon-wheel">
                    <img src="./media/icon_wheel/icon_wheel_hover.png" alt="jantes"/>
                </a>
            </div>
            <a href="#">
                <img src="./media/icon_door/icon_door_normal.png" alt="door"/>
            </a>
            <div className="overlay-door">
                <a href="#" className="icon-door">
                    <img src="./media/icon_door/icon_door_hover.png" alt="porte"/>
                </a>
            </div>
            <a href="#">
                <img src="./media/icon_view/icon_view_normal.png" alt="view"/>
            </a>
            <div className="overlay-view">
                <a href="#" className="icon-view">
                    <img src="./media/icon_view/icon_view_hover.png" alt="vue"/>
                </a>
            </div>

        </div>
    );
};

export default Menu;