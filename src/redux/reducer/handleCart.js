const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) =>
                x.id === product.id
            )
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            }
            else {
                const product = action.payload;
                return [...state, {
                    ...product, qty: 1
                }]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            // if (exist1.qty === 1) {
            //     return state.filter((x) => x.id !== exist1.id)
            // } else {
            //     return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            // }
            return state.filter((x) => x.id !== exist1.id)
            break;
        case "INCREASE":
            const exist2 = state.find((x) => x.id === product.id)
            if (exist2.qty === 0) {
                return state.filter((x) => x.id !== exist2.id)
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            }

        case "DECREASE":
            const exist3 = state.find((x) => x.id === product.id)
            if (exist3.qty === 1) {
                return state.filter((x) => x.id !== exist3.id)
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }

        default:
            return state;
            break;
    }
}
export default handleCart