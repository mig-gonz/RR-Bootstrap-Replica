import Card from "react-bootstrap/Card";
import "../App.css";
import "../css/top-section.css";

function TopSection() {
  return (
    <Card className="Main text-black" style={{ background: "#deedd6" }}>
      <Card.Img
        className="Image heroImage"
        src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <div className="wrapper">
          <Card.Title className="header">
            Order groceries for delivery or pickup today
          </Card.Title>
          <Card.Text>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default TopSection;
