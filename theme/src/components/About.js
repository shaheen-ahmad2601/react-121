import React from 'react'
import { ThemeContext } from './Context/ThemeContext'
import { useContext } from 'react'
import "../App.css"


export default function About() {
    const {mystyle, btntext, toggleStyle } = useContext(ThemeContext);


  return (
    <div className='container-div' style={mystyle}>
            <h1 className="app-div">About Javascript, React And MongoDb</h1>
      <div class="container" id="accordionExample">
  <div class="container-item">
    <h2 class="container-header" id="headingOne">
      <button class="container-button" type="button" data-bs-toggle="timeLapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      About Javascript
      </button>
    </h2>
    <div id="collapseOne" class="container-timeLapse timeLapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="container-body" style={mystyle}>
        <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, eum? Iste iusto aspernatur reiciendis accusantium illo saepe sapiente hic quasi unde? Vero, est mollitia. In accusamus vel doloremque similique laborum inventore nam quas. Deleniti asperiores beatae ex praesentium ipsa earum iste veritatis tempore cumque provident porro quod eius ipsam enim cum facere, aperiam culpa quas sunt adipisci dolore neque voluptates vitae! Reprehenderit mollitia aperiam perspiciatis quibusdam sint, voluptate blanditiis nihil ipsam, dolorum quis, distinctio eaque eligendi amet! Esse debitis molestias, earum nisi quo, nihil labore magnam tempora quasi, iste eos architecto. Nostrum ullam et cupiditate maiores at incidunt ipsam nihil.</strong>
      </div>
    </div>
  </div>
  <div class="container-item">
    <h2 class="container-header" id="headingTwo">
      <button class="container-button collapsed" style={mystyle} type="button" data-bs-toggle="timeLapse" data-bs-target="#time-2" aria-expanded="false" aria-controls="time-2">
       About React
      </button>
    </h2>
    <div id="time-2" class="container-timeLapse timeLapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="container-body" style={mystyle}>
        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum doloremque quod dolor accusantium, illum non quaerat aperiam iste repellendus iusto hic, vitae odio sed cupiditate voluptates inventore, sunt quia distinctio. Quo dolorem asperiores dolore, magnam fuga maxime officiis iure nulla temporibus rem similique ut odit fugit. Dolorum laboriosam ipsam vitae magnam eos, repellendus quisquam corporis accusamus nesciunt, ab enim iure obcaecati temporibus eaque aspernatur, tenetur commodi optio vel dicta voluptate voluptatem laudantium! Laboriosam nostrum suscipit, repellat explicabo natus reprehenderit libero debitis, ullam quidem nesciunt quam voluptates magnam blanditiis tenetur earum eaque quos doloremque vel eos! Consequatur in unde debitis?</strong>
      </div>
    </div>
  </div>
  <div class="container-item">
    <h2 class="container-header" id="headingThree">
      <button class="container-button collapsed" type="button" style={mystyle} data-bs-toggle="timeLapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       About js
      </button>
    </h2>
    <div id="collapseThree" class="container-timeLapse timeLapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="container-body" style={mystyle}>
        <strong>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque mollitia labore aut officiis, ipsum dolorum eaque explicabo. Reiciendis, veritatis ab fugiat consequatur corrupti odio deserunt odit error placeat fugit accusantium provident! Rerum odit neque eligendi placeat molestias debitis labore quibusdam vitae eos, harum repudiandae dolores voluptas assumenda fugiat accusamus perferendis ad vel dicta temporibus iusto fugit nam facilis? Velit tenetur dolorum magnam labore beatae modi provident asperiores expedita, placeat nulla rem alias excepturi, corporis inventore voluptate fugit nisi libero vitae, minima optio eaque eveniet. Beatae debitis consectetur corrupti assumenda. Qui ab debitis minus eligendi? Ut doloremque blanditiis dolor facilis quae!
        </strong>
      </div>
    </div>
  </div>
  <div className="container">
<button type="button" onClick={toggleStyle} className="btn btn-danger my-3">{btntext}</button>
</div>
</div>
    </div>
  )
}
