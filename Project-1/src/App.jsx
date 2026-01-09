
function App() {

  return <center>
    <h1 >Application Form</h1>

    <div className="container">
      <div class="row mb">
    <div class="col-6">
      <input type="text" placeholder="Enter Username" />
    </div>
    <div class="col-6">
      <input type="date" placeholder="Enter Your Age here..." />
    </div>
  </div>
  <div class="row mb">
    <div class="col-6">
      <input type="password" placeholder="Enter Your Password" />
    </div>
    <div class="col">
      <input type="email" placeholder="Enter Your Email" />
    </div>
   </div>

  <div class="row mb">
    <div class="col-6">
      <input type="number" placeholder="Phone Number" />
    </div>
    <div class="col-6">
      <input type="text" placeholder="Enter Your Address" />
    </div>
  </div>

  <div class="row mb">
    <div class="col-6 one">
      <button type="button" class="btn btn-success button">Login</button>
    </div>
    <div class="col-4 one">
      <button type="button" class="btn btn-danger button">Reset</button>
    </div>
  </div>
    </div>

  </center>
}

export default App
