import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">BestB4</h1>
          <p className="lead">
            Share food you don't need, reducing waste and bringing communities together
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" name="login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
