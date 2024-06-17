const style = {
    background: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

type Props = {
    todoText: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void,
    disabled: boolean
}

export const InputTodos = (props: Props) => {
    const {todoText, onChange, onClick, disabled } = props
    return(
        <div style={style}>
            <input disabled={disabled} placeholder='TODOを入力' value={todoText} onChange={onChange}/>
            <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
    )
}
