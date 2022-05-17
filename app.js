const packages = [
  {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
  {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
  {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
  {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
  {heavy: true, priority: true, fragile: true, to: 'Brittany'}, 
  {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
  {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}]

  let filteredPackages = packages
  
  function genPackageHtml(package) {
    return `
    <div class="card">
    <div class="card-body">
    <h2 class="card-title">To: ${package.to}</h2>
    <h3 class="card-subtitle">Tracking: ${package.trackingNumber}</h3>
    <div class="container-fluid">
    <div class="row">
    <div class="col-4">
    <p class="card-text text-center">${(package.heavy) ? "Heavy" : ""}</p>
    </div>
    <div class="col-4">
    <p class="card-text text-center">${(package.priority) ? "Priority" : ""}</p>
    </div>
    <div class="col-4">
    <p class="card-text text-center">${(package.fragile) ? "Fragile" : ""}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
  }
  
  function draw() {
    let packagesHtml = ""
    for (let i = 0; i < filteredPackages.length; i++) {
      packagesHtml += genPackageHtml(filteredPackages[i])
    }
    document.getElementById("package-cards").innerHTML = packagesHtml
  }
  
  function reset() {
    filteredPackages = packages
    draw()
  }
  
  function filter(attribute) {
    let newFilteredPackages = []
    for (let i = 0; i < filteredPackages.length; i++) {
      if (filteredPackages[i][attribute]) {
        console.log(filteredPackages[i])
        newFilteredPackages.push(filteredPackages[i])
      }
    }
    filteredPackages = newFilteredPackages
    draw()
  }
  
  draw()