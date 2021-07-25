import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export class Services extends Component {
    state = {
        services: [
        {
            icon: <FaCocktail />,
            title: "Free Cocktail",
            info: 'loremEx culpa incididunt et ut laboris dolore cupidatat amet aliquip excepteur fugiat ullamco occaecat consectetur.Nostrud aliquip ullamco irure dolore duis mollit.Labore dolore consectetur cupidatat excepteur aliqua officia magna in veniam occaecat tempor in dolore culpa.Ex mollit proident excepteur aliquip deserunt dolor qui ea labore.'
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: 'loremEx culpa incididunt et ut laboris dolore cupidatat amet aliquip excepteur fugiat ullamco occaecat consectetur.Nostrud aliquip ullamco irure dolore duis mollit.Labore dolore consectetur cupidatat excepteur aliqua officia magna in veniam occaecat tempor in dolore culpa.Ex mollit proident excepteur aliquip deserunt dolor qui ea labore.'
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: 'loremEx culpa incididunt et ut laboris dolore cupidatat amet aliquip excepteur fugiat ullamco occaecat consectetur.Nostrud aliquip ullamco irure dolore duis mollit.Labore dolore consectetur cupidatat excepteur aliqua officia magna in veniam occaecat tempor in dolore culpa.Ex mollit proident excepteur aliquip deserunt dolor qui ea labore.'
        },
        {
            icon: <FaBeer/>,
            title: "Free Beer",
            info: 'loremEx culpa incididunt et ut laboris dolore cupidatat amet aliquip excepteur fugiat ullamco occaecat consectetur.Nostrud aliquip ullamco irure dolore duis mollit.Labore dolore consectetur cupidatat excepteur aliqua officia magna in veniam occaecat tempor in dolore culpa.Ex mollit proident excepteur aliquip deserunt dolor qui ea labore.'
        }
    ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((items,index)=>{
                        return <article key={index} className="services">
                            <span>{items.icon}</span>
                            <h6>{items.title}</h6>
                            <p>{items.info}</p>
                        </article>
                    })}
                </div>
            </div>
        )
    }
}

export default Services
