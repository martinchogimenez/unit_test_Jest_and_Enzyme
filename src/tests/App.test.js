import React from "react";
import { shallow } from "enzyme";
import App from "../App";



//Test suite Cartas obtener usuarios
describe('Test suite Cartas obtener usuarios', function () {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    // Test case a- App debe coincidir con snapshot
    test('App debe coincidir con snapshot', function () {

        expect(wrapper).toMatchSnapshot();
        
    });

   
    //Test case b- el título debe ser "Listado de Usuarios" 
    test('el título debe ser "Listado de Usuarios"', function () {
           
        expect(wrapper.find("h2").text()).toEqual("Listado de Usuarios");

    });

    // Test case c- debe existir un loader con texto "cargando página..."
    test('debe existir un loader con texto "cargando página..."', function () {
        
        expect(wrapper.contains(<p>Cargando página...</p>)).toBe(true);

    });


    //Test case h- el color de fondo debe ser inicialmente "#ccffff"
    test('el color de fondo debe ser inicialmente "#ccffff"', function () {
          
        expect(wrapper.state().color).toEqual("#ccffff");

    });

    //Test case i- el color de fondo debe ser "#ffff99" al hacer click en el div contenedor
    test('el color de fondo debe ser "#ffff99" al hacer click en el div contenedor', function () {
        
        wrapper.find("div").first().simulate("click");

        expect(wrapper.state().color).toEqual("#ffff99");

    });
     
});