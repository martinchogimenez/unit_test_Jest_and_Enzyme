import Perfil from '../Perfil';
import React from "react";
import { shallow } from "enzyme";

describe('Test suite Cartas obtener usuarios- Perfil usuario', function () {
    
    let wrapper;

    beforeEach(() => {

        const mUsuario = {
            nombre: "José Gomez",
            email: "unit-test@mock.org.us",
            telefono: "081-887-8877 x0977",
            codigoPostal: "88998-9933"
        }

        wrapper = shallow(<Perfil usuario={mUsuario} />)

    });

    test('Perfil debe coincidir con snapshot', function () {

        expect(wrapper).toMatchSnapshot();

    });


    test('el usuario debe tener una dirección de e-mail unit-test@mock.org.us', function () {
        
        expect(wrapper.state().usuario.email).toEqual('unit-test@mock.org.us');

    })

    
    //Test case f- cada carta debe tener 4 elementos de párrafo con clase "titulo"
    test('cada carta debe tener 4 elementos de párrafo con clase "titulo"', function () {
           
        expect(wrapper.find("p").find(".titulo").length).toEqual(4);

    });


    // Test case g- el elemento div dentro de cada carta debe tener una clase "celda"
    test('el elemento div dentro de cada carta debe tener una clase "celda"', function () {
        
        expect(wrapper.find("div").hasClass("celda")).toBe(true);

    });


});