
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
              <p className="links">Terms of Service&nbsp;&nbsp; Privacy Policy&nbsp;&nbsp;Cookie Policy&nbsp;&nbsp;Accessibility&nbsp;&nbsp;Ads infoMore&nbsp;© 2023 X Corp.</p>
            
            </div>

        </div>
    );
}
export default Home;