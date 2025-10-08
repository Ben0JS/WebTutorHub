import '../App.css';
export default function Home() {
  return (
<div className="container py-4">
  <div className="text-center mb-5">
    <h1 className="display-3 fw-bold text-primary">Welcome to the E-Learning Platform</h1>
    <p className="lead text-info">
      Learn new skills online with curated courses. Explore categories, interact with experts, and track your achievements easily.
    </p>
  </div>

  <div className="row mb-4">
    <div className="col-md-12 mx-auto">
      <h2 className="h4 mb-3 text-success"> Courses Offered</h2>
      <div className="row row-cols-1 row-cols-md-4 g-5 mb-2">
        <div className="col">
          <div className="card border-primary bg-primary-subtle h-100 text-primary-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">React Basics</h5>
              <p className="card-text">A gentle introduction to modern React.js.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-success bg-success-subtle h-100 text-success-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">JavaScript Mastery</h5>
              <p className="card-text">Level up your JavaScript knowledge with hands-on problems.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-info bg-info-subtle h-100 text-info-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">Node.js Crash Course</h5>
              <p className="card-text">Build backend apps with Node.js from scratch.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-warning bg-warning-subtle h-100 text-warning-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">Python for Data Science</h5>
              <p className="card-text">Analyze data and automate tasks with Python.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-danger bg-danger-subtle h-100 text-danger-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">UI/UX Design Fundamentals</h5>
              <p className="card-text">Understand user experience and interface design basics.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-secondary bg-secondary-subtle h-100 text-secondary-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">Machine Learning Essentials</h5>
              <p className="card-text">Dive into algorithms powering AI and ML.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-warning bg-warning-subtle h-100 text-warning-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">Cloud Computing Foundations</h5>
              <p className="card-text">Explore cloud platforms, deployment, and architecture.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-primary bg-primary-subtle h-100 text-primary-emphasis cursor-pointer">
            <div className="card-body py-3">
              <h5 className="card-title fw-bold">Digital Marketing Strategies</h5>
              <p className="card-text">Build successful online marketing campaigns and branding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="col mb-4">
    <div className="col-md-12 mb-3">
      <div className="bg-light border rounded-3 p-4 shadow">
        <h2 className="h5 text-info mb-3">Why Choose Us?</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Flexible learning schedules</li>
          <li className="list-group-item">Official certificates</li>
          <li className="list-group-item">Active student forums & community</li>
          <li className="list-group-item">Expert instructors with real-world experience</li>
        </ul>
      </div>
    </div>
    <div className="col-md-12 mb-3">
      <div className="bg-success-subtle border border-success p-4 rounded-3 shadow">
        <h2 className="h5 text-success mb-3">Student Success Stories</h2>
        <p>
          Learners have transformed their careers with our tailored paths. Thousands have landed jobs at top tech companies.
        </p>
        <blockquote className="blockquote mb-0">
          <p>"Thanks to this platform, I switched from a non-tech career to a full-stack developer role within 6 months!"</p>
          <footer className="blockquote-footer">Priya S., Software Engineer</footer>
        </blockquote>
      </div>
    </div>
  </div>

  <div className="col mb-4">
    <div className="col-md-12 mb-3">
      <div className="bg-warning-subtle border border-warning p-4 rounded-3 shadow">
        <h2 className="h5 text-warning mb-3">Upcoming Features</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Live mentoring sessions</li>
          <li className="list-group-item">Gamified learning badges & leaderboards</li>
          <li className="list-group-item">AI-powered recommendations</li>
          <li className="list-group-item">Job interview prep modules</li>
        </ul>
      </div>
    </div>
    <div className="col-md-12 mb-3 text-center d-flex flex-column justify-content-center">
      <h2 className="h4 text-primary mb-3">Get Started Today</h2>
      <p className="mb-3 text-info">
        Join thousands of learners and start your journey. Sign up now and get access to your first course for <b>free</b>!
      </p>
      <div className="col">
        <button className="btn btn-lg btn-danger px-4 shadow">Sign Up Now</button>
      </div>
      
    </div>
  </div>

</div>
    

  );
}
