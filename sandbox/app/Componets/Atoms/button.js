export default function MyButton({onClick, text}) {
    return(
      <button onClick={onClick}>{text}</button>
    )
  }