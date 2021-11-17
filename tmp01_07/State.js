// Create class using object constructor function
function State(id, state, content, body) {
  this.id = id;
  this.state = state;
  this.content = content;
  this.body = body;
  this.setId = function (id) {
    this.id = id;
  };
  this.setState = function (state) {
    this.state = state;
  };
}

export default State;
