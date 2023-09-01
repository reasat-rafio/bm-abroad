function getRandomKey() {
    return Math.random().toFixed(5).split('.')[1];
}
function assertSpanKey(span) {
    return {
        _key: span._key || getRandomKey(),
        ...span
    };
}
export default function assertBlockKey(block) {
    return {
        _key: block._key || getRandomKey(),
        ...block,
        ...(block._type === 'block' && Array.isArray(block.children)
            ? {
                children: block.children.map(assertSpanKey)
            }
            : {})
    };
}
