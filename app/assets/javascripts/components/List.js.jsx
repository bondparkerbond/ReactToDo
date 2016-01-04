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

  addItemForm: function() {
    alert('alerts when form is rerendered!');
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