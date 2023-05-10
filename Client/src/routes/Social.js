
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Clubs from "../components/SocialContent/aboutclubs";

function Social() {
  return (
    <div>
   {/* <Navbar/> */}
   <Hero 
   cName="hero-mid"
   ID="other"
   title="Social Space"
   text=""
   buttonText=""
   url="/"
   btnClass="hide"
   />
    <Clubs/>
    <Footer/>
   </div>
  );
}

export default Social;
