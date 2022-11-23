// this action is going to be called from the front end
export const depositMoney = function (amount) {
    debugger;
    return (dispatch) => {
        // dispatch is a redux function
        dispatch({
            // dispatch takes in the action object (a aplain JavaScript object with a type field)
            type: "deposit",
            payload: amount,
        });
    };
};

export const withdrawMoney = function (amount) {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount,
        });
    };
};
