import React, { Component } from "react";
import {Jumbotron, Navbar} from "../../components/index";
import ProductValues from "../../components/Material/modules/views/ProductValues";
import ProductCategories from "../../components/Material/modules/views/ProductCategories";
import AppFooter from "../../components/Material/modules/views/AppFooter";

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <ProductValues />
                <ProductCategories />
                <AppFooter />
            </div>
        )
    }
}

export default Home; 