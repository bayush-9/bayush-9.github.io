import "./WorkEx.css";

const WorkEx = (props) => {
  return (
    <section className="section">
      <h2 className="h2">Working Experience</h2>
      <div className="timeline-block">
        <div className="timeline-line"></div>
        <div className="timeline-content">
          {props.workEx.map((work, index) => (
            <div key={index} className="work-experience">
              <h3 className="h3">
                {work.position} at {work.orgName}, {work.duration}
              </h3>
              {work.description.map((desc, descIndex) => (
                <p key={descIndex} className="p">
                  {"•"} {desc}
                </p>
              ))}
              {props.workEx.length - 1 !== index && (
                <div style={{ height: 30 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkEx;
