// Write your code here

import './index.css'

const Login = props => {
  const {loginBtn} = props

  return (
    <button type="button" className="btn" onClick={loginBtn}>
      Login
    </button>
  )
}

export default Login
