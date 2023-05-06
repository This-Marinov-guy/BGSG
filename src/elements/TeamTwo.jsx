import React, { Fragment } from 'react'
import ImageFb from './ui/ImageFb'

const COMMITTEES = {
    PERSONAL_DEV: [
        {
            id: 1,
            name: "Milena |",
            title: " Chair",
            description: '19 | BSc International Business',
            interests: 'Extreme sports, Reading, Marketing, Painting'
        },
        {
            id: 2,
            name: "Jordanka |",
            title: " PR Manager",
            description: '21 | BSc Psychology',
            interests: 'Gym, Dancing, Personal Development'
        },
        {
            id: 3,
            name: "Emil |",
            title: " Treasurer",
            description: '20 | BSc International Business',
            interests: 'Finance, Personal Development, Reading, Music, Sports'
        },
        {
            id: 4,
            name: "Gergana |",
            title: " Secretary",
            description: '19 | BSc International Business',
            interests: 'Synchronized swimming, Photography, Mathematics, Reading'
        }
    ],
    SPORT: [

    ]
}

const TeamTwo = () => {
    return (
        <Fragment>
            <div style={{ margin: 'auto', width: '80%' }} className='center_div'>
                <ImageFb className='team_member_border-2 mb--80' src='/assets/images/team/com-full-1.webp' fallback='/assets/images/team/com-full-1.jpg' alt='Committee' />
            </div>
            <div className='container committee_container'>
                {COMMITTEES.PERSONAL_DEV.map((value) => {
                    return (<div key={value.id} className={`mt--60 ${value.id % 2 === 0 ? 'committee_member_left' : 'committee_member_right'}`}>
                        <ImageFb src={`/assets/images/team/com-${value.id}.webp`} fallback={`/assets/images/team/com-${value.id}.jpg`} alt='Committee Member' />
                        <div className='text'>
                            <div className='name'>
                                <h3 className='mr--5'>{value.name}</h3>
                                <h4>{value.title}</h4>
                            </div>
                            <p>{value.description}</p>
                            <p>{value.interests}</p>
                        </div>
                    </div>)
                })}
            </div>
        </Fragment>
    )
}

export default TeamTwo