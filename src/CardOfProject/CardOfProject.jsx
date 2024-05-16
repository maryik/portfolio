import React from 'react'
import './CardOfProject.css'
import Button from '../Button/Button'
import { FaGithub } from 'react-icons/fa'

export default function CardOfProject({image, title, description}) {
    return (
        <div className="card-of-project">
            <img src={image} alt="Project" className="image-project"/>
            <h2 className="title-project">{title}</h2>
            <p className="description-project">{description}</p>
        </div>
    )
}