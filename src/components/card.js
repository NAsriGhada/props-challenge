import React from 'react'

function Card ({arr}) {
  
    return (
        
            <div class="project-card">
              {
                  arr.map(el=>(
                    <div class="project-card">
                    <img src={el.imgs} alt="project" />
                    <h3>{el.project}</h3>
                    <p>
                     {el.pa}
                    </p>
                    <p><a href="#">Github Link</a></p>
                  </div>
                  
                  ))
              }
          </div>
        
    )
}

export default Card

