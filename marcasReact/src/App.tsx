import './index.css';

import MyComponent1 from './ejemploBasic/myComponent1'
import MyComponent2 from './ejemploBasic/myComponent2'
import MyList1 from './ejemploBasic/myList1'
import MyList2 from './ejemploBasic/myList2'

import ComponenteEventos1 from './ejemploClases/ComponenteEventos1'
import ComponenteEventos2 from './ejemploClases/ComponenteEventos2'

import State1 from './ejemploUseState/State1'
import State1_1 from './ejemploUseState/State1.1';
import State2 from './ejemploUseState/State2';
import Marca from './ejemploUseState/Marca';

import SinUseEffect from './ejemploUseEffect/sinUseEffect';
import UseEffect1 from './ejemploUseEffect/useEffect1_sinDependencias';
import UseEffect1_1 from './ejemploUseEffect/useEffect1.1_arrayVacío';
import UseEffect2 from './ejemploUseEffect/useEffect2';
import UseEffect3 from './ejemploUseEffect/useEffect3';


function App() { 
  return (
    <div>
      <div>
        <h1> Repositorio Global: </h1>
        <p> 
          <b> Enlace: </b>
          <a href="https://github.com/orgs/Programacion-Avanzada-UTN-FRVM/repositories?type=all*" target="_blank" rel="noopener noreferrer"> 
            https://github.com/orgs/Programacion-Avanzada-UTN-FRVM/repositories?type=all*
          </a>
        </p>


      </div>


      <div>
        <h1> Carpeta "ejemploClases"</h1>
        <ComponenteEventos1/>   {/* Usamos la función de flecha directamente en el parámetro*/}
        <br/>
        <br/>
        <ComponenteEventos2/>   {/* Sacamos la función de flecha afuera */}

      </div>


      <div>
        <h1>Carpeta "ejemploBasic"</h1>
        <p> 
          <b>Manejo básico de HTML: </b>
          <a href="https://github.com/Programacion-Avanzada-UTN-FRVM/example-react" target="_blank" rel="noopener noreferrer"> 
            https://github.com/Programacion-Avanzada-UTN-FRVM/example-react
          </a>
        </p>
        <br/>
        <MyComponent1/>
        <br/>
        <MyComponent2/>
        <br/>
        <MyList1/>
        <br/>
        <MyList2/>
      </div>

      
      <div>
        <h1>Carpeta "useState"</h1>
        <p> 
          <b> Hooks de React - useState: </b>
          <a href="https://github.com/Programacion-Avanzada-UTN-FRVM/example-react-hooks/tree/main/src" target="_blank" rel="noopener noreferrer"> 
            https://github.com/Programacion-Avanzada-UTN-FRVM/example-react-hooks/tree/main/src
          </a>
        </p>


        <State1/>
        <State1_1/>
        <State2/>
        <Marca/>


      </div>

      <div>
        <h1>Carpeta "useEffect"</h1>
        <p> 
          <b> Hooks de React - useEffect: </b> 
          <a href="https://github.com/Programacion-Avanzada-UTN-FRVM/example-react-effect" target="_blank" rel="noopener noreferrer"> 
            https://github.com/Programacion-Avanzada-UTN-FRVM/example-react-effect
          </a> 
        </p>
        
        <SinUseEffect/>
        <UseEffect1/>
        <UseEffect1_1/>
        <UseEffect2/>
        <UseEffect3/>
      
      </div>


    </div>
  )    
}

export default App
