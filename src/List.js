import React, { useState } from 'react';
import data from "./data";

function List() {
    //DATA
    const [people, setPeople] = useState(data);
    // console.log(people)
    //COMPONENT
    return (
        <>

            {/* LIST OF MEETINGS */}
            <div className="people-list">
                <ul className="user-list">
                    {
                        people.map((person) => {
                            return (
                                <li key={person.id}>
                                    <article className="person-info">
                                        <img src={person.img} className="person-img" />

                                        <div className="person-info">
                                            <div className="person-action">
                                                <p>{person.nome}</p>

                                                <button type="button" className="btn"> cancel </button>
                                            </div>
                                            <p>{person.stato}</p>
                                        </div>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>
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