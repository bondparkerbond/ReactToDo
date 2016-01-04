var List = React.createClass({
  getInitialState: function() {
    return { items: this.props.items }
  },

  getDefaultState: function() {
    return { items: [] }
  },

  showAddForm: function() {
    alert('Show add form!');
  },

  render: function() {
    return( <div>
              <a className='waves-effect waves-light btn' onClick={this.showAddForm}>Add Item</a>
              <div className='card blue-grey darken-1'>
                <div className='card-content white-text'>
                  <span className='card-title'>To Do</span>
                </div>
              </div>
            </div> );
  }
});