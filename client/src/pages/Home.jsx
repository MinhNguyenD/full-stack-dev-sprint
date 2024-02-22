import { useState } from "react";
import Header from "../components/Header";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card">
              <img src="././public/sk-icon.png" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Room 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
