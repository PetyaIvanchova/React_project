export const Home = () => {
    return (
        
        <section className="maingallery">
            <h1 class='three'>The three most popular topics in photography</h1>
            <div className="container">
                <div className="gallery">
                    <div className="single-img">
                        <img className='homeimg' src='/images/IMG_0174.jpg' alt="gallery image" />
                        <div className="single-img-content">
                            <h3 className="blackthing">Sunsets</h3>
                        </div>
                    </div>
                    <div className="single-img">
                        <img className='homeimg' src='/images/IMG_0178.jpg' alt="gallery image" />
                        <div className="single-img-content">
                            <h3 className="blackthing">Black&White</h3>
                        </div>
                    </div>
                    <div className="single-img">
                        <img className='homeimg' src='/images/IMG_4308.jpg' alt="gallery image" />
                        <div className="single-img-content">
                            <h3 className="blackthing">Nature</h3>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}