export * from './userActions'
export * from './UserTypes'
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};