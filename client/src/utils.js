export const checkResult_ = (name, value,dispatch,state,setuser1,setuser2) => {
    console.log("value",value)
    if (value === "X") {
      if((state[1].value == "X" || name === "1") &&
          (state[2].value == "X" || name === "2") &&
          (state[3].value == "X" || name === "3")){
            dispatch({ type: "UPDATE_COLOR",payload:{ name: '1', value: "green" }});
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: '2', value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: '3', value: "green" },
            });
             setuser1((prev) => ({ ...prev, won: true }));
          }else if((state[1].value == "X" || name === "1") &&
          (state[4].value == "X" || name === "4") &&
          (state[7].value == "X" || name === "7")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "1", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "4", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[7].value == "X" || name === "7") &&
          (state[8].value == "X" || name === "8") &&
          (state[9].value == "X" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "8", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[3].value == "X" || name === "3") &&
          (state[6].value == "X" || name === "6") &&
          (state[9].value == "X" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "3", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "6", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[1].value == "X" || name === "1") &&
          (state[5].value == "X" || name === "5") &&
          (state[9].value == "X" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "1", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[3].value == "X" || name === "3") &&
          (state[5].value == "X" || name === "5") &&
          (state[7].value == "X" || name === "7")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "3", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[2].value == "X" || name === "2") &&
          (state[5].value == "X" || name === "5") &&
          (state[8].value == "X" || name === "8")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "2", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "green" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "8", value: "green" },
            });
            setuser1((prev) => ({ ...prev, won: true }));

          }else if((state[4].value == "X" || name === "4") &&
          (state[5].value == "X" || name === "5") &&
          (state[6].value == "X" || name === "6")) {
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "4", value: "green" },
        });
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "5", value: "green" },
        });
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "6", value: "green" },
        });
        setuser1((prev) => ({ ...prev, won: true }));
      }
    }else{
      if((state[1].value == "O" || name === "1") &&
          (state[2].value == "O" || name === "2") &&
          (state[3].value == "O" || name === "3")){
            console.log("Enter the ddddddd")
            dispatch({ type: "UPDATE_COLOR",payload:{ name: '1', value: "red" }});
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: '2', value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: '3', value: "red" },
            });
             setuser2((prev) => ({ ...prev, won: true }));
          }else if((state[1].value == "O" || name === "1") &&
          (state[4].value == "O" || name === "4") &&
          (state[7].value == "O" || name === "7")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "1", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "4", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[7].value == "O" || name === "7") &&
          (state[8].value == "O" || name === "8") &&
          (state[9].value == "O" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "8", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[3].value == "O" || name === "3") &&
          (state[6].value == "O" || name === "6") &&
          (state[9].value == "O" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "3", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "6", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[1].value == "O" || name === "1") &&
          (state[5].value == "O" || name === "5") &&
          (state[9].value == "O" || name === "9")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "1", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "9", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[3].value == "O" || name === "3") &&
          (state[5].value == "O" || name === "5") &&
          (state[7].value == "O" || name === "7")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "3", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "7", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[2].value == "O" || name === "2") &&
          (state[5].value == "O" || name === "5") &&
          (state[8].value == "O" || name === "8")){
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "2", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "5", value: "red" },
            });
            dispatch({
              type: "UPDATE_COLOR",
              payload: { name: "8", value: "red" },
            });
            setuser2((prev) => ({ ...prev, won: true }));

          }else if((state[4].value == "O" || name === "4") &&
          (state[5].value == "O" || name === "5") &&
          (state[6].value == "O" || name === "6")) {
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "4", value: "red" },
        });
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "5", value: "red" },
        });
        dispatch({
          type: "UPDATE_COLOR",
          payload: { name: "6", value: "red" },
        });
        setuser2((prev) => ({ ...prev, won: true }));
      }
    }
  };