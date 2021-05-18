import React from 'react';

function Buttons(props) {
    return (
        <div className="btns">
           <a href="#">
               <div className="button1">
                    Увеличить
               </div>
           </a>
            <a href="#">
                <div className="button2">
                    Уменьшить
                </div>
            </a>
            <a href="#">
                <div className="button3">
                    Сбросить
                </div>
            </a>
        </div>
    );
}



export default Buttons;