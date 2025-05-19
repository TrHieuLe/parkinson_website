export default function Question({ className, children }) {
  return (
    <div className={ className }>
      <p className="text-xl">{ children }?</p>
    </div>        
  )
}