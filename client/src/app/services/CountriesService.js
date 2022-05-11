import CountriesApi from "../api/countries";
import { Component } from "react";

function setNode(self, data) {
    self.setState({
        countries: data
    })
}

export default class NodeService extends Component {
    state = {
        countries: []
    }
    async componentDidMount() {
        try {
            const { data } = await CountriesApi.get()
            setNode(this, data)
        } catch (error) {
            console.log(error);
        }
    }
}