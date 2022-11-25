// this action creator is going to be called from the front end
export const depositMoney = (amount) => ({
    type: "deposit",
    payload: amount,
});

export const withdrawMoney = (amount) => ({
    type: "withdraw",
    payload: amount,
});
