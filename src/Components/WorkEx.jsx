import "./WorkEx.css";
/**
 *
 * @param {} props
 * @returns
 */
const WorkEx = (props) => {
  console.log("WorkEx component rendered", props);

  return (
    <div>
      <h2 className="h2">Education Timeline</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "2px",
            backgroundColor: "#636362",
          }}
        ></div>
        <div>
          {props.workEx.map((work, index) => (
            <div key={index} className="work-experience">
              <div>
                <div style={{ marginLeft: 10 }}>
                  <h3 className="h3">
                    {work.position} at {work.orgName}, {work.duration}
                  </h3>
                  {work.description.map((desc, descIndex) => (
                    <p key={descIndex} className="p">
                      {"•"} {desc}
                    </p>
                  ))}
                </div>
              </div>
              <div />
              {props.workEx.length - 1 !== index && (
                <div style={{ height: 30 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkEx;
