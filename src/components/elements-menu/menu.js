import React from 'react';


const Menu = () => {
    return (
        <div className="icon-bar">
            <a href="#">
                <img src="./media/icon_color/icon_color_normal.png" alt="color"/>
            </a>
            <div className="overlay">
                <a href="#" className="icon">
                    <img src="./media/icon_color/icon_color_hover.png" alt="hover"/>
                </a>
            </div>
            <a href="#">
                <img src="./media/icon_wheel/icon_wheel_normal.png" alt="wheel"/>
            </a>
            <div className="overlay">
                <a href="#" className="icon">
                    <img src="./media/icon_wheel/icon_wheel_hover.png" alt="wheel"/>
                </a>
            </div>
            <a href="#">
                <img src="./media/icon_door/icon_door_normal.png" alt="door"/>
            </a>
            <div className="overlay">
                <a href="#" className="icon">
                    <img src="./media/icon_door/icon_door_hover.png" alt="door"/>
                </a>
            </div>
            <a href="#">
                <img src="./media/icon_view/icon_view_normal.png" alt="view"/>
            </a>
            <div className="overlay">
                <a href="#" className="icon">
                    <img src="./media/icon_view/icon_view_hover.png" alt="view"/>
                </a>
            </div>

        </div>
    );
};

export default Menu;