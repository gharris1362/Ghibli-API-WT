import React, { Fragment } from 'react'


const People = (props) => {

    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h4>{props.person.name}</h4>
                    <p class="card-text">{props.person.age}</p>
                    <p className='card-text'>{props.person.gender}</p>
                    <footer className='blockquote-footer'><a target='null' href={`https://ghibliapi.herokuapp.com/people/${props.person.id}`}>Link To Raw JSON</a></footer>
                </div>
            </div>
        </>
    )
}


export default People;