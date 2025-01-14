function Toolbar(props: { filters: string[], selected: string, onSelectFilter: any }) {

    let buttons = [];

    for (let i = 0; i < props.filters.length; i++) {
        let className = "btn";
        if (props.selected == props.filters[i]) {
            className = "btn btn-active";
        }
        let newButton = <button key={`${props.filters[i]} key`} className={className} onClick={() => props.onSelectFilter(props.filters[i])}>{props.filters[i]}</button>;
        buttons.push(newButton);
    }
    return (
        <div>{buttons}</div>
    )
}

export default Toolbar