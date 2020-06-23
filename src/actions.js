export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_FIVE = 'INCREMENT_FIVE';
export const DECREMENT_FIVE = 'DECREMENT_FIVE';


export function increment() {
    return {
        type: INCREMENT
        
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function incrementFive(index) {
    return {
        type: INCREMENT_FIVE
        
    }
}

export function decrementFive() {
    return {
        type: DECREMENT_FIVE
    }
}