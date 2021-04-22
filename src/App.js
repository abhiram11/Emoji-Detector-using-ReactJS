import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emoj, setEmoj] = useState("");

  const emojiDictionary = {
    "😊": "Smiley",
    "😞": "Sad",
    "🤬": "Angry",
    "🍕": "Pizza",
    "🌹": "Flower",
    "😳": "Disbelief",
    "🎉": "Celebration"
  };

  const emojiWeKnow = Object.keys(emojiDictionary);
  // console.log(emojiWeKnow);

  function emojiClickHandler(emoji) {
    console.log(emoji);
    setEmoj(emojiDictionary[emoji]);
  }

  function inputHandler(event) {
    var emojiInput = event.target.value;

    // console.log();
    if (emojiInput in emojiDictionary) {
      setEmoj(emojiDictionary[emojiInput]);
    } else {
      setEmoj("Input doesn't match any of our Emoji");
    }
  }

  return (
    <div className="App">
      <h1> Emoji Detector! </h1>
      <input onChange={inputHandler}></input>
      <h2>{emoj}</h2>
      <h3> Emojis We Know </h3>
      {emojiWeKnow.map(function (eachEmoji) {
        return (
          <span
            onClick={() => emojiClickHandler(eachEmoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={eachEmoji}
          >
            {" "}
            {eachEmoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

// export default function App() {
//   var shoppinngList = ["FIFA", "COD", "CSGO", "PUBG", "VALORANT"];
//   // var login = false;
//   var username = "User";

//   function bgColor(index) {
//     if (index % 2 === 0) {
//       return "green";
//     }
//     return "orange";
//   }

//   function loggedCheck(login) {
//     if (login) {
//       username = "Abhiram";
//       return <em> {username} </em>;
//     }
//     return username;
//   }

//   function clickHandler(item) {
//     console.log(item, "Clicked!");
//   }

//   return (
//     <div className="App">
//       <h1>Shopping Lists for {loggedCheck(true)}</h1>
//       <ul>
//         {shoppinngList.map((item, index) => {
//           return (
//             <li
//               key={item}
//               onClick={() => clickHandler(item)}
//               style={{ backgroundColor: bgColor(index), padding: "1rem" }}
//             >
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
