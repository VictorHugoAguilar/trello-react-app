const initialState = [
    {
        id: 0,
        title: "Primer List de Card",
        cards: [
            {
                id: 0,
                text: "Primer cards",
            },
            {
                id:1,
                text: "Segunda card de prueba"
            }
        ]
    },
    {
        id: 1,
        title: "Segunda List de Card",
        cards: [
            {
                id: 0,
                text: "Primer cards",
            },
            {
                id:1,
                text: "Segunda card de prueba"
            },
            {
                id:3,
                text: "Tercera card de prueba"
            }
        ]
    }
]

const listReducer = (state, action) => {
    switch(action.type){
        default:
            return initialState;
    }
};

export default listReducer;