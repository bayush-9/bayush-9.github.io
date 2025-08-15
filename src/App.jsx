import "./App.css";
import SocialIcons from "./Components/SocialIcons";
import WorkEx from "./Components/WorkEx";
import workEx from "./constants/workEx.js";

const styles = {};

function App() {
  return (
    <div>
      <h1 className="h1">Ayush Anil Bharsakle</h1>
      <h2 className="h2">Mobile App Developer</h2>
      <h3 className="bio">
        I'm a software engineer focused on building high-performance mobile apps
        with React Native, integrated with native iOS (Swift) and Android
        (Java/Kotlin) modules. I work across the stack from BLE communication
        and native bridges to automation with Appium and testable, scalable code
        in TypeScript. I care about clean architecture, reliability, and solving
        hard technical problems that ship.
      </h3>
      <div style={{ height: 40 }} />
      <h2 className="h2">Technical Skills</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "2px",
            backgroundColor: "#636362",
          }}
        ></div>
        <div style={{ marginLeft: 10 }}>
          <h3 className="h3">Languages</h3>
          <h4 className="h4">JavaScript, TypeScript, C++, Swift, Dart</h4>
          <div style={{ height: 5 }} />
          <h3 className="h3">Frameworks</h3>
          <h4 className="h4">React Native, SwiftUI, Flutter</h4>
          <div style={{ height: 5 }} />
          <h3 className="h3">Meta</h3>
          <h4 className="h4">
            Android Studio, XCode, Firebase, Git, Github, Bitrise CI/CD,
            Onesignal, Google Play Console, App store connect, Appium, BLE, IoT,
            Clickup
          </h4>

          <div style={{ height: 5 }} />
          <h3 className="h3">Others</h3>
          <h4 className="h4">
            Competitive Programming, Data Structures and Algorithms, Scrum
          </h4>
        </div>
      </div>
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

      <WorkEx workEx={workEx} />

      <div style={{ height: 40 }} />

      <div
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        {SocialIcons()}
      </div>
      <h6>made in house with ❤️ by Ayush Bharsakle</h6>
    </div>
  );
}

export default App;
