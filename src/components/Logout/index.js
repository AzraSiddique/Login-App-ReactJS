// Write your code here

import './index.css'

const Logout = props => {
  const {logoutBtn} = props

  return (
    <button type="button" className="btn" onClick={logoutBtn}>
      Logout
    </button>
  )
}

export default Logout
