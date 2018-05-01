import React from "react";
import ReactDOM from "react-dom";
import Button from 'material-ui/Button';

import ButtonAppBar from "./butt";
import GridComp from "./gridz";

const Index = () => {
    return (
        <div>
            <ButtonAppBar/>
            <GridComp/>
            <Button variant="raised" color="primary">
                Hello Worldx
            </Button>
        </div>

    );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// class App extends Component {
//     componentDidMount() {
//         fetch('/asd')
//             .then(res => res.json())
//     }
//
//     render() {
//         return (
//             <Button variant="raised" color="primary">
//                 Hello Worldx
//             </Button>
//         );
//     }
// }
//
//
// // ReactDOM.render(<Index />, document.getElementById("root"));
// export default App;