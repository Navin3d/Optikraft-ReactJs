const defaultProps = {
    img: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/newmenubanner.jpg?v=1583826330",
    title: "Shop For Men"
}

const EyeGlassCard = (props = defaultProps) => {
    return(
        <div>
            <div class="container-fluid">
                <img src={props.img} width="100%" />
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}

export default EyeGlassCard;
