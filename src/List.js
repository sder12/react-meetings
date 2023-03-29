import React, { useState } from 'react';
import data from "./data";

function List() {
    //DATA
    const [people, setPeople] = useState(data);
    console.log(people)
    //COMPONENT
    return (
        <>
            {/* LIST OF MEETINGS */}
            <div>
                {
                    people.map((person) => {
                        console.log(person.nome)
                    })
                }
            </div>

            {/* BTNS */}
            <div className="btn-group">
                <button type="button" className="btn btn-reset">reload</button>
                <button type="button" className="btn btn-delete">delete all</button>
            </div>
        </>
    )
}

export default List