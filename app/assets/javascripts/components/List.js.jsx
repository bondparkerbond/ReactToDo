var List = React.createClass({
  getInitialState: function() {
    return { items: this.props.items }
  },

  getDefaultState: function() {
    return { items: [] }
  },

  showAddForm: function() {
    this.setState({showAdd: !this.state.showAdd});
  },

  addItemName: function(e) {
    this.setState({itemName: e.currentTarget.value});
  },

  addItemForm: function() {
    if(this.state.showAdd){
      return( <div>
                <form onSubmit={this.submitItem}>
                  <div className='input-field'>
                    <input autoFocus='true' placeholder='Item Name' type='text' onChange={this.addItemName} />
                    <button className='btn waves-effect' type='submit'>submit</button>
                  </div>
                </form>
              </div>);
    }
  },

  render: function() {
    return( <div>
              <a className='waves-effect waves-light btn' onClick={this.showAddForm}>Add Item</a>
              {this.addItemForm()}
              <div className='card blue-grey darken-1'>
                <div className='card-content white-text'>
                  <span className='card-title'>To Do</span>
                </div>
              </div>
            </div> );
  }
});