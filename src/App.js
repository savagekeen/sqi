import React from 'react'

const App = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body">
  <div class="container-fluid">
  <img src={require('./big.webp')}width="70px"height="70px"/> 
  <div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    About
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Programmes
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Admission
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    E-Portal
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    SQI Scholarship
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
<div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    News
  </button>
  <ul class="dropdown-menu">
    ...
  </ul>
</div>
      </ul>
    </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default App