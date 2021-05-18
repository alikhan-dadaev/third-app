import React from 'react';

function Buttons(props) {
    return (
        <div className="btns">
           <a href="#">
               <div className="button1" onClick={props.plus}>
                    Увеличить
               </div>
           </a>
            <a href="#">
                <div className="button2" onClick={props.minus}>
                    Уменьшить
                </div>
            </a>
            <a href="#">
                <div className="button3" onClick={props.reset}>
                    Сбросить
                </div>
            </a>
        </div>
    );
}



export default Buttons;