import React from 'react'
//import { Children } from 'react'
import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'
import Card from './card'

function ProjectParent() {
    let arr = [
        {id: 1, imgs: proj1, project: "project1", pa: " My Bonnie lies over the ocean." },
        {id: 2, imgs: proj2, project: "project2", pa: " My Bonnie lies over the sea." },
        {id: 3, imgs: proj3, project: "project3", pa: "My Bonnie lies over the ocean." },
        {id: 4, imgs: proj4, project: "project4", pa: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam." },
    ]
    return (
       <div>
         <Card arr = {arr}/> 
       </div>
    )
}

export default ProjectParent
