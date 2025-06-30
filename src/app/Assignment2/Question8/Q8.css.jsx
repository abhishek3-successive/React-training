

const containerStyle = {
    textAlign: "center",
    width: "80%",
    margin: "0 auto",
    maxWidth: "1000px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f8f9fa",
    padding: "20px",
};

const imageContainerStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: "10px",
};

const imageStyle = {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    transition: "transform 1s ease-in-out",
};

const controlsStyle = {
    marginTop: "20px",
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

const buttonHoverStyle = {
    backgroundColor: "#2980b9",
};

export{
    buttonHoverStyle,
    buttonStyle,
    containerStyle,
    controlsStyle,
    imageContainerStyle,
    imageStyle
}