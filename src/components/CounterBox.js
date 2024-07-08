function CounterBox({add,remove,count}) {
    return(
        <div className="counter-box">
            <button onClick={remove}>-</button>
            <input type="text" value={count} readOnly/>
            <button onClick={add}>+</button>
        </div>

    )
}
export default CounterBox;