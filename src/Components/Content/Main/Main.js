import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";
import './Main.scss'
import Description from "../Description/Description";
import Content1 from "../Content1/Conten1";


const Main =()=>{
    return (
        <div className="content">
            <Heading />
            <Description/>
            <Content1/>
            <Footer/>
        </div>
    );
}

export default Main;