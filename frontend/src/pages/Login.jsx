import {FaGoogle} from 'react-icons/fa'
import {FaGithub} from "react-icons/fa";
import {FaSpotify} from "react-icons/fa"

const Login = () => {
 

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const spotify = () => {
    window.open("http://localhost:5000/auth/spotify", "_self");
  };
 

  return (<>
    <div className="login">
      <h1 className="loginTitle bella">Choose a social to login/register</h1>
      </div>
    <div className="card ">
          <div className="github btn  btn-block " onClick={github}>
            <FaGithub className="theRza gitty"/>
            Github
          </div>
          <div className="github btn btn-reverse btn-block " onClick={google}>
            <FaGoogle className="theRza"/>
            Google
          </div>
          <div className="github btn btn-block " onClick={spotify}>
            <FaSpotify className="theRza"/>
            Spotify
          </div>
          
          </div>
          </>
      
 
  );
};

export default Login;
