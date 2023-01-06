import Navbar from "../components/Navbar";
import EyeGlassCard from "../components/EyeGlass-Card";


const EyeGlass = () => {
    return (
        <div>
            <Navbar />
            <EyeGlassCard img={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/newmenubanner.jpg?v=1583826330"} title="Shop Men" />
            <EyeGlassCard img={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/shopWomenMobile.png?v=1583741796"} title="Shop Women" />
            <EyeGlassCard img={"https://cdn.shopify.com/s/files/1/0015/2879/1092/files/eyeglass_kids.jpg?v=1586839209"} title="Shop kids" />
        </div>
    );
}

export default EyeGlass;