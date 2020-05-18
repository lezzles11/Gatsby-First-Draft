import React from "react"

function Grateful() {
  const style = {
    color: "#37474f ",
    fontSize: "3rem",
  }
  return (
    <div>
      <h1 style={style} className="font6">
        But if you're not feeling happy, or are not feeling safe, for whatever
        reason, maybe you should say something. If you're feeling something,
        someone else probably feels the same way, too. We're not that different
        from one another.
      </h1>{" "}
      <br />
    </div>
  )
}
const SlideFour = () => {
  return (
    <div>
      <Grateful />
    </div>
  )
}

export default SlideFour
