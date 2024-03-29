const Home = () => {
    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/slidehowMobile1_1000x.jpg?v=1584338925"
                            width="100%" height="500" />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SM_-_New_website_banners_-Category_banner_1900x.jpg?v=1584614524"
                            width="100%" height="500" />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/sundown-men_9d126f4d-34ef-4d58-9d72-52bf70899547_3000x.jpg?v=15853093193000w"
                            width="100%" height="500" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <div>
                <h2>Collections</h2>
            </div>
            <br />

            <div class="row">
                <div class="one col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/hapstre_480x.jpg?v=1583740632"
                        class="img-thumbnail" />
                    <p>Happster</p>
                </div>
                <div class="one col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/5_480x.jpg?v=1588331524" class="img-thumbnail" />
                    <p>Delivery in 4-5 days</p>
                </div>
                <div class="one col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/metal_480x.jpg?v=1583740741"
                        class="img-thumbnail" />
                    <p>Metal</p>
                </div>
            </div><br />

            <div class="row">
                <div class=" two col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/reading_glasses_01_360x.jpg?v=158703487"
                        class="img-thumbnail" />
                    <p>Reading glass</p>
                </div>
                <div class=" two col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/360X360_sunon_360x.jpg?v=1585051656"
                        class="img-thumbnail" />
                    <p>SunOn</p>
                </div>
                <div class="two col-md-4 col-sm-12">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SP--01-10_073e42c5-01aa-48d4-b401-41438533e086_360x.jpg?v=1585559123"
                        class="img-thumbnail" />
                    <p>Lightweight</p>
                </div>
            </div><br />

            <div class="row">
                <div class=" three col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/rounds_360x.jpg?v=1583740921"
                        class="img-thumbnail" />
                    <p>Round</p>
                </div>
                <div class=" three col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/rectangle_360x.jpg?v=1583740940"
                        class="img-thumbnail" />
                    <p>Rectangle</p>
                </div>
                <div class=" three col-md-4 col-sm-12">
                    <img src="https://cdn.shopify.com/s/files/1/0015/2879/1092/files/360X360_cateye_360x.jpg?v=1585400171"
                        class="img-thumbnail" />
                    <p>Cateyes</p>
                </div>
            </div><br />
        </div>
    );
}

export default Home;
