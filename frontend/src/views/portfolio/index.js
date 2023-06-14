import React from "react";
import request from 'js/request';

function Portfolio(){
    const test = () =>{
        request.get({
            url: '/auth/test',
            data: {},
            res: function(data){
                if(data.code !== 0){
                    alert(data.message);
                }
            },
            err: function(data){
                console.log(data);
            }
        });
    };

    return (
        <>
            Portfolio
            <button onClick={test}>test</button>
        </>
    )
}

export default Portfolio;