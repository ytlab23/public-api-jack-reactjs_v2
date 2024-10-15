const getStyles = (name, personName, theme) =>
{
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
// 
export {
    getStyles
}