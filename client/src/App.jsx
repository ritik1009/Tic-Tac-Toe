import { useReducer, useState } from "react";
import "./App.css";
import Tile from "./Components/Tile";
import { INITIAL_STATE, reducerFunction } from "./game_reducer";
import { checkResult_ } from "./utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user1, setuser1] = useState({ value: "X", chance: true, won: false });
  const [user2, setuser2] = useState({ value: "O", chance: false, won: false });
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
  const [chance, setChance] = useState(0);

  const handleClick = (data, key_) => {
    if (user1.won) {
      toast.success("Player 1 has Won 🤪", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (user2.won) {
      toast.success("Player 2 has Won 🤪", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (chance == 9) {
      console.log("Draw");
    } else if (!data.clicked) {
      if (user1.chance) {
        dispatch({
          type: "UPDATE_VALUE",
          payload: { name: key_, value: user1.value },
        });
        checkResult_(key_, user1.value, dispatch, state, setuser1, setuser2);
      } else {
        dispatch({
          type: "UPDATE_VALUE",
          payload: { name: key_, value: user2.value },
        });
        checkResult_(key_, user2.value, dispatch, state, setuser1, setuser2);
      }
      setChance(chance + 1);
      console.log("chance", chance);
      setuser1((prev) => ({ ...prev, chance: !prev.chance }));
      setuser2((prev) => ({ ...prev, chance: !prev.chance }));
    } else {
      // alert("Its already been selected");
      toast.error("It's already been selected", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const Restart = () => {
    dispatch({ type: "RESET" });
    setChance(0);
    setuser1((prev) => ({ value: "X", chance: !prev.chance, won: false }));
    setuser2((prev) => ({ value: "O", chance: !prev.chance, won: false }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-0 bg-slate-400 h-[100vh]">
      <ToastContainer />
      {user1.won ? (
        <h1 className="text-4xl font-semibold tracking-wide text-gray-300 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-90 rounded-md px-5 py-1">
          User 1 Won
        </h1>
      ) : null}
      {user2.won ? (
        <h1 className="text-4xl font-semibold tracking-wide text-gray-300 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-90 rounded-md px-5 py-1">
          User 2 Won
        </h1>
      ) : null}
      {chance === 9 ? <h1>There is a Draw</h1> : null}
      <h1>{user1.chance ? "User1 Chance" : "User2 Chance"}</h1>
      <div className="grid grid-cols-3 ">
        {Object.keys(state).map((key_, index) => {
          return (
            <div key={index} onClick={() => handleClick(state[key_], key_)}>
              <Tile
                border={state[key_].border}
                value={state[key_].value}
                clickable={state[key_].clicked}
                color={state[key_].color}
              />
            </div>
          );
        })}
      </div>
      {user1.won || user2.won || chance === 9 ? (
        <button
          className="bg-cyan-400 py-2 px-4 mt-2 rounded-full font-bold text"
          onClick={Restart}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default App;
