const CalcListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CALC_LIST":
      const newItem = {
        answer: action.payload,
      };
      const newCalcList = [...state];
      newCalcList.push(newItem);
      return newCalcList;
    default:
      return state;
  }
};

export default CalcListReducer;
