import React from 'react'
import './Projects.css'
import snakeProject from '../assets/snake-project.png'
import cyberProject from '../assets/cyber-project.png'
import salesNearby from '../assets/salesNearby-project.png'
import calculator from '../assets/calculator-project.png'
import randomCats from '../assets/randomcats-project.png'
import CardOfProject from '../CardOfProject/CardOfProject'
export default function Projects(){
    const projects = [{ id: 1, image: snakeProject, title: 'Snake Game', description: 'Web game "Snake", developed using canvas. The snake is controlled by keys, the goal is to collect 30 berries' },
    { id: 2, image: cyberProject, title: 'Cyberpunk site', description: 'The cyberpunk website was made for layout training. In addition to the visual part, a form for sending a screenshot and adding dynamics to the site have been added' },
    { id: 3, image: salesNearby, title: 'SalesNearby', description: 'SalesNearby is a web application that helps users see upcoming discounts and promotions. When you approach a discount, you will receive a discount notification. You can also add your own discounts' },
    { id: 4, image: calculator, title: 'Calculator', description: 'Calculator is the first application. The user can perform not only the easiest mathematical operations, but also more complex ones' },
    { id: 5, image: randomCats, title: 'Random Cats', description: 'Random Cats is just a fun site where you can browse through cute cat photos with just a swipe.' }];

    return(
        <div className="container-projects">
            <h1 className='title-projects'>My Projects</h1>
            <div className="cards-projects">
                {projects.map(project => (
                 <CardOfProject key={project.id} image={project.image} title={project.title} description={project.description} />
                ))}
            </div>
        </div>
    )
}