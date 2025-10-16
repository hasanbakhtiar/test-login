
const Login = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-conent-center flex-column">
        <h2 className="my-5 alert alert-success col-3 text-center">Login</h2>
        <div className="col-3">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-warning">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login