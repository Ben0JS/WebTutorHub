import { useParams } from "react-router-dom";
import { courses, tutorials } from "../data";
import { useState } from "react";

export default function CourseTutorial() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const lessons = tutorials[id];
  const [currentLesson, setCurrentLesson] = useState(0);

  if (!course) return <div className="container mt-5"><h2>Course Not Found</h2></div>;
  if (!lessons) return <div className="container mt-5"><h2>No Tutorial Available</h2></div>;

  const lesson = lessons[currentLesson];

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">{course.title} - Tutorial</h1>
          <h4 className="mb-3">{lesson.title}</h4>

          {/* Render dynamic content */}
          {lesson.content.map((block, idx) => {
            if (block.type === "p") {
              return <p key={idx}>{block.text}</p>;
            }
            if (block.type === "list") {
              return (
                <ul key={idx} className="list-group list-group-flush mb-3">
                  {block.items.map((item, i) => (
                    <li key={i} className="list-group-item">{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "code") {
              return (
                <pre key={idx} className="bg-dark text-light p-3 rounded mb-3">
                  <code>{block.code}</code>
                </pre>
              );
            }
            return null;
          })}

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={prevLesson}
              disabled={currentLesson === 0}
            >
              ⬅ Previous
            </button>

            <span className="align-self-center fw-bold">
              Lesson {currentLesson + 1} of {lessons.length}
            </span>

            <button
              className="btn btn-primary"
              onClick={nextLesson}
              disabled={currentLesson === lessons.length - 1}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
