import "./App.css";

function App() {
  return (
    <>
      <main>
        <header>
          <a href=" " className="logo">
            MyBlog
          </a>
          <nav>
            <a href="">Login</a>
            <a href="">Register</a>
          </nav>
        </header>
        <div className="post">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/21775187/pexels-photo-21775187/free-photo-of-unknown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="texts">
            <h2>Escalante, UT, United States</h2>
            <p>This is a place in the USA that looks never ending</p>
          </div>
        </div>
        <div className="post">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/21775187/pexels-photo-21775187/free-photo-of-unknown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="texts">
            <h2>Escalante, UT, United States</h2>
            <p>This is a place in the USA that looks never ending</p>
          </div>
        </div>
        <div className="post">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/21775187/pexels-photo-21775187/free-photo-of-unknown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="texts">
            <h2>Escalante, UT, United States</h2>
            <p>This is a place in the USA that looks never ending</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
