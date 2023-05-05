
import "./Home.css";
import Logo from "../../component/Home/Logo/Logo";
import Feed from "../../component/Home/Feed/Feed";
import LoginOption from "../../component/Home/LoginOption/LoginOption";

function Home(){
    return(
        <div className="home">
            <div className="leftContainer">
                <Logo/> </div>
            <div className="centerContainer">
                <Feed/>
            </div>
            <div className="rightContainer">
           
                <LoginOption/> 
            
            </div>

        </div>
    );
}
export default Home;