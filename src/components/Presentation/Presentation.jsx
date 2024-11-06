import "./Presentation.css";

function Presentation({ title, description, image }) {
    return (
        <div className="presentation">
            <div className="left-content">
                <h1 className="title--presentation">{title}</h1>
                <p className="description--presentation">{description}</p>
            </div>
            <div>
                <img className="img--presentation" src={image} alt="Image du restaurant" />
            </div>
        </div>
    )
}

export default Presentation;