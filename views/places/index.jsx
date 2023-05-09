const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place,index) => {
    return (
      <div className="col-sm-6">
        <div className="text-center">
          <h2>
            <a href={`/places/${index}`}>
              {place.name}
            </a>
            </h2>
        </div>
        <p className="text-center">{place.cuisines}</p>
        <div className="text-center">
          <img src={place.pic} alt={place.name} />
        </div>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Place to rant or relish about</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
