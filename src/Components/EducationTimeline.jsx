const EducationTimeline = () => {
  return (
    <>
      <div style={{ height: 40 }} />
      <h2 className="h2">Education Timeline</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "2px",
            backgroundColor: "#636362",
          }}
        ></div>
        <div style={{ marginLeft: 10 }}>
          <h3 className="h3">
            Indian Institute of Technology(BHU), Varanasi (2020-2024)
          </h3>
          <h4 className="h4">Bachelor of Technology (8.65/10)</h4>
          <div style={{ height: 5 }} />
          <h3 className="h3">
            Narayana Junior College, Aurangabad (2018-2020)
          </h3>
          <h4 className="h4">Physics, Chemistry and Mathematics (92.3%)</h4>
        </div>
      </div>
      <div style={{ height: 40 }} />
    </>
  );
};

export default EducationTimeline;
