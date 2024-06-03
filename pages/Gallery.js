import Image1 from './../img/gallery/6GT.jpg'
import Image2 from './../img/gallery/BMW-6er-GT-01.jpg'
import Image3 from './../img/gallery/BMW-6er-GT-02.jpg'
import Image4 from './../img/gallery/GT&.jpg'
import Image5 from './../img/gallery/gt2020.jpg'
import Image6 from './../img/gallery/bmw6gtt.jpg'
const Gallery = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Gallery</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="!#">
                            <img src={Image1} alt="Project img" className="project__img" />
                            <h3 className="project__title">Gaming streaming portal</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={Image2} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src={Image3} alt="Project img" className="project__img" />
                            <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src={Image4} alt="Project img" className="project__img" />
                        <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img src={Image5} alt="Project img" className="project__img" />
                        <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img src={Image6} alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming community</h3>
                    </li>

                </ul>
            </div>
        </main>
    );
};

export default Gallery;